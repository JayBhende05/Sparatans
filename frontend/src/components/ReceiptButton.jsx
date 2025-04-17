import React from 'react';
import { Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { toast } from 'react-toastify';



const ReceiptButton = ({ bookingId }) => {
    const handleDownloadReceipt = async () => {
        try {
            // Show loading indicator
            toast.info('Generating receipt...', { autoClose: false, toastId: 'receipt-loading' });
            
            const response = await axios.get(
                `http://localhost:8000/api/v1/admin/receipt/${bookingId}`, 
                {
                    responseType: 'blob',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );

            // Dismiss loading toast
            toast.dismiss('receipt-loading');
            
            // Create blob from response
            const blob = new Blob([response.data], { type: 'application/pdf' });
            
            // Generate filename with booking ID and current date
            const dateStr = new Date().toISOString().split('T')[0];
            const fileName = `TourBooking-Receipt-${bookingId}-${dateStr}.pdf`;
            
            // Download the file
            saveAs(blob, fileName);
            
            // Show success message
            toast.success('Receipt downloaded successfully!');
            
        } catch (error) {
            // Dismiss loading toast if it exists
            toast.dismiss('receipt-loading');
            
            console.error('Error downloading receipt:', error);
            
            if (error.response?.status === 401) {
                toast.error('Please login to download receipt');
            } else if (error.response?.status === 403) {
                toast.error('Admin access required');
            } else if (error.response?.status === 404) {
                toast.error('Booking not found');
            } else {
                toast.error('Failed to download receipt');
            }
        }
    };

    return (
        <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<FileDownloadIcon />}
            onClick={handleDownloadReceipt}
            sx={{
                textTransform: 'none',
                fontSize: '0.875rem',
                backgroundColor: '#1976d2',
                '&:hover': {
                    backgroundColor: '#1565c0',
                }
            }}
        >
            Download Receipt
        </Button>
    );
};

export default ReceiptButton;