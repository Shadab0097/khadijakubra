import { useState } from 'react';
import { FaQrcode, FaUniversity, FaMobileAlt, FaCopy } from 'react-icons/fa';
import { SiPhonepe, SiPaytm, SiGooglepay } from 'react-icons/si';
import toast from 'react-hot-toast';

export default function PaymentDetails() {
  const [activeTab, setActiveTab] = useState('upi');

  const tabs = [
    { id: 'upi', label: 'UPI Payment', icon: <FaMobileAlt /> },
    { id: 'bank', label: 'Bank Transfer', icon: <FaUniversity /> },
    { id: 'qr', label: 'QR Code', icon: <FaQrcode /> }
  ];

  const upiApps = [
    {
      name: 'PhonePe',
      icon: <SiPhonepe className="w-6 h-6" />,
      link: 'phonepe://pay?pa=9711197176@ptaxis&pn=JamiaKhadijatulKubra'
    },
    {
      name: 'Paytm',
      icon: <SiPaytm className="w-6 h-6" />,
      link: 'paytmmp://pay?pa=9711197176@ptaxis&pn=JamiaKhadijatulKubra'
    },
    {
      name: 'Google Pay',
      icon: <SiGooglepay className="w-6 h-6" />,
      link: 'gpay://upi/pay?pa=9711197176@ptaxis&pn=JamiaKhadijatulKubra'
    }
  ];

  const bankDetails = {
    accountName: 'Jamia Khadijatul Kubra Welfare and Trust',
    accountNumber: 'XXXXXXXXXXXX',
    ifscCode: 'XXXXXXXX',
    bank: 'Example Bank',
    branch: 'Main Branch',
    accountType: 'Savings'
  };

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${field} copied to clipboard!`, {
        duration: 2000,
        style: {
          background: '#4CAF50',
          color: '#fff',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#4CAF50',
        },
      });
    } catch (err) {
      toast.error('Failed to copy text');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg overflow-x-hidden">
      <h3 className="text-xl font-semibold mb-6 text-center">Payment Details</h3>

      <div className="flex border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2  py-2 flex-1 justify-center ${activeTab === tab.id
              ? 'border-b-2 border-primary text-primary'
              : 'text-gray-500 hover:text-primary'
              }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        {activeTab === 'upi' && (
          <div>
            <p className="font-medium">UPI ID: trust@upi</p>
            <p className="text-sm text-gray-600 mt-2 mb-6">Pay using your preferred UPI app</p>

            <div className="grid grid-cols-3 gap-4">
              {upiApps.map((app) => (
                <a
                  key={app.name}
                  href={app.link}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="text-primary mb-2">{app.icon}</div>
                  <span className="text-sm font-medium">{app.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'bank' && (
          <div className="space-y-4">
            {Object.entries(bankDetails).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between bg-white p-3 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="font-medium">{value}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(value, key.replace(/([A-Z])/g, ' $1').trim())}
                  className="text-primary hover:text-secondary p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <FaCopy className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'qr' && (
          <div className="text-center">
            <img
              src="https://example.com/qr-code.png"
              alt="Payment QR Code"
              className="mx-auto w-48 h-48"
            />
            <p className="text-sm text-gray-600 mt-4">
              Scan this QR code using any UPI app to make the payment
            </p>
          </div>
        )}
      </div>
    </div>
  );
}