# PDF Sepia Background

This project allows you to apply a sepia tone background to all pages of an existing PDF file. The script is written in TypeScript and uses the `pdf-lib` library to manipulate PDF files. You can adjust the opacity of the sepia background for transparency effects.

## Features

- Add a sepia background to every page of a PDF.
- Control the opacity of the background.
- Written in TypeScript for type safety.
- Runs with Bun, a fast JavaScript runtime.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) or [Bun](https://bun.sh/)
- [TypeScript](https://www.typescriptlang.org/) (if running in a TypeScript environment)
- `pdf-lib` for PDF manipulation

## Installation

### Step 1: Install Bun (if not already installed)

To install Bun, follow the [official Bun installation guide](https://bun.sh/docs/installation).

### Step 2: Install Project Dependencies

Run the following command to install the necessary dependencies:

```bash
bun add pdf-lib