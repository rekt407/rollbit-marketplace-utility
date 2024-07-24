# Rollbit Marketplace Utility

Developed by REKT

## Overview

This Chrome extension enhances the Rollbit.com marketplace by appending additional information to relevant elements on the page, specifically for Rollbots and Sportsbot. If you like my work, please consider tipping REKT on Rollbit.

## Features

- Displays custom data for Sports Rollbots and Rollbots on the marketplace.
- Calculates and shows estimates for Shares per year, Freebets per year (50%), Return per year, and ROI for Sports Rollbots.
- Displays Price for 100k lotto stakes for Rollbots.
- Color-coded information for better visual feedback.

## Installation

### Step 1: Clone or Download the Repository

Clone this repository to your local machine using:
```sh
git clone https://github.com/rekt407/rollbit-marketplace-utility.git
```
Or download the ZIP file and extract it.

Or download the ZIP file and extract it.

### Step 2: Open Chrome Extensions Page

1. Open Google Chrome.
2. Navigate to `chrome://extensions/`.

### Step 3: Enable Developer Mode

1. In the top right corner, toggle the switch labeled `Developer mode` to enable it.

### Step 4: Load the Extension

1. Click on the `Load unpacked` button.
2. Select the directory where you cloned or extracted the repository.

The extension should now be installed and active.

## Usage

Once the extension is installed, it will automatically start working when you navigate to the Rollbit.com marketplace. The additional data will be appended to the relevant elements on the page without any further action required from you.

## How It Works

The script processes elements on the Rollbit.com marketplace page, calculates various financial metrics, and appends these metrics to the elements. Here's a brief overview of what each function does:

### `appendData()`

- Finds and processes elements on the page that have not been processed yet.
- Extracts and calculates financial metrics for Sports Rollbots and Rollbots.
- Appends calculated data to the elements and color codes them based on their values.

### `observeDOM()`

- Observes the DOM for changes and calls `appendData` when new elements are added.
- Ensures that dynamically loaded content is also processed.

### Initialization

- Calls `appendData` and `observeDOM` when the page finishes loading to ensure all elements are processed and observed for changes.

## Safety

This extension is safe to use. It contains no malware and will not steal any credentials. The code is open source and fully verifiable by anyone. You can inspect the code yourself to ensure it meets your safety standards.

## Contribution

Feel free to contribute to this project by forking the repository and submitting pull requests.

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository or contact REKT on Rollbit.

## License

This project is licensed under the MIT License.

---

Enjoy using the Rollbit Marketplace Utility!

If you feel generous just `/tip REKT` on Rollbit.
