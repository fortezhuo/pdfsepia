import { readFileSync, writeFileSync } from "fs";
import { PDFDocument, rgb } from "pdf-lib";
import { resolve } from "path";

async function addSepiaBackground(
  inputPdfPath: string,
  outputPdfPath: string,
  opacity: number = 0.5
): Promise<void> {
  // Load the existing PDF
  const existingPdfBytes = readFileSync(inputPdfPath);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Define the sepia color (RGB values)
  const sepiaColor = rgb(194 / 255, 174 / 255, 133 / 255); // Normalized RGB

  // Loop through each page and add the sepia background
  const numPages = pdfDoc.getPageCount();
  for (let i = 0; i < numPages; i++) {
    const page = pdfDoc.getPage(i);
    const { width, height } = page.getSize();

    // Draw a rectangle that covers the entire page with sepia color
    page.drawRectangle({
      x: 0,
      y: 0,
      width: width,
      height: height,
      color: sepiaColor,
      opacity: opacity, // Adjust opacity for transparency effect (0 to 1)
    });
  }

  // Save the modified PDF
  const pdfBytes = await pdfDoc.save();
  writeFileSync(outputPdfPath, pdfBytes);
  console.log(`PDF Sepia created and saved as ${outputPdfPath}`);
}

const opacity = 0.3; // Set desired opacity here (0 to 1)
const inputPdfPath = resolve(process.cwd(), process.argv[2]);
const outputPdfPath = inputPdfPath.replace(/(\.[^.]+)$/, "_sepia$1");

addSepiaBackground(inputPdfPath, outputPdfPath, opacity).catch((err) => {
  console.error(err);
});
