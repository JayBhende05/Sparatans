import Booking from '../models/bookingsModel.js';
import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

export const generateReceipt = async (req, res) => {
    try {
        const { bookingId } = req.params;

        // Fetch booking details
        const booking = await Booking.findById(bookingId);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        // Create PDF document
        const doc = new PDFDocument();
        const filePath = path.join(process.cwd(), `receipts/receipt_${bookingId}.pdf`);
        
        // Ensure receipts directory exists
        const dirPath = path.dirname(filePath);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        const writeStream = fs.createWriteStream(filePath);
        doc.pipe(writeStream);

        // Add receipt content
        doc.fontSize(20).text('Booking Receipt', { align: 'center' });
        doc.moveDown();

        // Booking Information
        doc.fontSize(14).text(`Receipt #: ${booking._id}`);
        doc.text(`Booking Date: ${new Date(booking.bookingDate).toLocaleDateString()}`);
        doc.text(`Status: ${booking.status}`);
        doc.moveDown();

        // Customer Information
        doc.fontSize(16).text('Customer Details:', { underline: true });
        doc.fontSize(12).text(`Name: ${booking.buyer.name}`);
        doc.text(`Email: ${booking.buyer.email}`);
        doc.moveDown();

        // Product Information
        doc.fontSize(16).text('Tour Package Details:', { underline: true });
        doc.fontSize(12).text(`Destination: ${booking.product.destinationName}`);
        doc.text(`Activity: ${booking.product.activity}`);
        doc.text(`Duration: ${booking.product.duration} day(s)`);
        doc.text(`Price: ₹${booking.product.price}`);
        doc.moveDown();

        // Payment Information
        doc.fontSize(16).text('Payment Details:', { underline: true });
        doc.fontSize(12).text(`Status: ${booking.payment}`);
        doc.moveDown();

        // Footer
        doc.fontSize(12).text('Thank you for your booking!', { align: 'center' });
        doc.text('For any queries, please contact our support team.', { align: 'center' });

        doc.end();

        writeStream.on('finish', () => {
            res.download(filePath, `receipt_${bookingId}.pdf`, (err) => {
                if (err) {
                    console.error('Error downloading receipt:', err);
                    res.status(500).json({ message: 'Error downloading receipt' });
                }
                // Optionally delete the file after download
                fs.unlink(filePath, (err) => {
                    if (err) console.error('Error deleting receipt file:', err);
                });
            });
        });

    } catch (error) {
        console.error('Error generating receipt:', error);
        res.status(500).json({ message: 'Error generating receipt', error: error.message });
    }
};