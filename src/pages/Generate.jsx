import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const downloadPDF = async () => {
    const element = document.getElementById("certificate");

    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    pdf.addImage(data, "PNG", 10, 10, 180, 100);
    pdf.save("certificate.pdf");
};

export default function Generate() {
    const [name, setName] = useState("");
    const [certId, setCertId] = useState("");

    const generateCert = () => {
        if (!name) return alert("Enter name first");

        const id = "CERT-" + Math.floor(Math.random() * 1000000);

        const certData = {
            id,
            name,
            date: new Date().toLocaleDateString(),
        };

        // Save to localStorage
        let existing = JSON.parse(localStorage.getItem("certs")) || [];
        existing.push(certData);
        localStorage.setItem("certs", JSON.stringify(existing));

        setCertId(id);
    };

    return (
        <div className="p-10 max-w-xl mx-auto">

            <h2 className="text-3xl font-bold mb-6 text-center">
                Generate Certificate
            </h2>

            {/* Input */}
            <input
                type="text"
                placeholder="Enter Name"
                className="border p-3 w-full rounded mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            {/* Button */}
            <button
                onClick={generateCert}
                className="bg-blue-600 text-white px-6 py-2 rounded w-full"
            >
                Generate Certificate
            </button>

            {/* Certificate Preview */}
            {certId && (
                <div className="mt-10 flex flex-col items-center">

                    <div id="certificate" className="w-[700px] bg-white border-4 border-blue-500 p-10 text-center shadow-xl rounded-lg">

                        <h1 className="text-3xl font-bold mb-4 text-blue-600">
                            Certificate of Completion
                        </h1>

                        <p className="mb-2 text-gray-600">
                            This is to certify that
                        </p>

                        <h2 className="text-2xl font-bold mb-2">
                            {name}
                        </h2>

                        <p className="mb-4 text-gray-600">
                            has successfully completed the program
                        </p>

                        <p className="text-sm text-gray-500 mb-4">
                            Certificate ID: {certId}
                        </p>

                        <div className="flex justify-between items-center mt-6">

                            <div>
                                <p className="text-sm">Date</p>
                                <p className="font-semibold">{new Date().toLocaleDateString()}</p>
                            </div>

                            <QRCodeCanvas value={certId} size={80} />

                            <div>
                                <p className="text-sm">Signature</p>
                                <p className="font-semibold">Authorized</p>
                            </div>

                        </div>

                    </div>

                    <button
                        onClick={downloadPDF}
                        className="mt-6 bg-purple-600 text-white px-6 py-2 rounded"
                    >
                        Download PDF
                    </button>

                </div>
            )}

        </div>
    );
}