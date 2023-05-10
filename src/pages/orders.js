import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const OrderPage = () => {
  const orders = [
    {
      date: '2023-05-01',
      time: '10:00 AM',
      auctionItem: 'Painting',
      address: '123 Main St',
      fullName: 'John Doe',
      bookingTime: '2023-04-30 10:00 PM',
      totalPrice: '$100',
    },
    {
      date: '2023-05-02',
      time: '02:30 PM',
      auctionItem: 'Sculpture',
      address: '456 Elm St',
      fullName: 'Jane Smith',
      bookingTime: '2023-05-01 09:30 AM',
      totalPrice: '$150',
    },
    // Add more orders here with the same structure
  ];

  return (
    
    <div>
        <Navbar />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Date</th>
            <th style={headerCellStyle}>Time</th>
            <th style={headerCellStyle}>Auction Item</th>
            <th style={headerCellStyle}>Address</th>
            <th style={headerCellStyle}>Full Name</th>
            <th style={headerCellStyle}>Booking Time</th>
            <th style={headerCellStyle}>Total Price</th>
            <th style={headerCellStyle}>Edit Booking</th>
            <th style={headerCellStyle}>Cancel Booking</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
              <td style={cellStyle}>{order.date}</td>
              <td style={cellStyle}>{order.time}</td>
              <td style={cellStyle}>{order.auctionItem}</td>
              <td style={cellStyle}>{order.address}</td>
              <td style={cellStyle}>{order.fullName}</td>
              <td style={cellStyle}>{order.bookingTime}</td>
              <td style={cellStyle}>{order.totalPrice}</td>
              <td style={cellStyle}>
                <button style={actionButtonStyle}>Edit</button>
              </td>
              <td style={cellStyle}>
                <button style={actionButtonStyle}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

const headerCellStyle = {
  backgroundColor: '#f2f2f2',
  color: '#333',
  fontWeight: 'bold',
  padding: '10px',
  textAlign: 'left',
};

const cellStyle = {
  padding: '10px',
  textAlign: 'left',
};

const evenRowStyle = {
  backgroundColor: '#f9f9f9',
};

const oddRowStyle = {
  backgroundColor: '#ffffff',
};

const actionButtonStyle = {
  padding: '5px 10px',
  backgroundColor: '#4caf50',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default OrderPage;
