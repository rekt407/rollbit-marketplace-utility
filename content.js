/**
 * ROLLBIT MARKETPLACE UTILITY
 * developed by REKT
 * 
 * Appends additional information to relevant elements on the page.
 * 
 * If you like my work pls /tip REKT on Rollbit
 */
function appendData() {

  // Find all elements that match the selector and have not been processed yet
  const elements = document.querySelectorAll('div.css-rp39ok:not([data-processed])');
  
  // Process each element
  elements.forEach(element => {
      const childElement = element.querySelector('.css-m7q4on');
      const svg = element.querySelector('svg.css-70oi89');
      
      const priceElement = svg?.nextElementSibling;
      
      // Check if necessary elements are present
      if (!childElement || !svg || !priceElement) {
          return;
      }

      // Get text content of the price after the svg and perform some calculations
      let listedPriceText = priceElement.textContent.replace('$', '');
      let listedPrice = parseFloat(listedPriceText);
      if (listedPriceText.includes('K')) {
          listedPriceText = listedPriceText.replace('K', '');
          listedPrice = parseFloat(listedPriceText) * 1000;
      } else if (listedPriceText.includes('M')) {
          listedPriceText = listedPriceText.replace('M', '');
          listedPrice = parseFloat(listedPriceText) * 1000000;
      }

      // Check if element contains relevant text
      if (childElement.textContent.includes("Sports Rollbots")) {

          // Find target element
          const targetElement = element.querySelector('.css-12g0wy1 .css-vfpi8t .css-1rtd48a');
          if (targetElement) {
              // Find spans within target element
              const spans = targetElement.querySelectorAll('span');
              if (spans.length < 3) {
                  return;
              }

              // Calculate values
              const spy = parseFloat(spans[0].textContent.replace('$', '').replace(',', '.')) * 12;
              const fby = parseFloat(spans[2].textContent.replace('$', '')) * 6;
              const rpy = spy + fby
              const roi = (rpy / listedPrice) * 100;

              // Create spans to display values
              const spySpan = document.createElement('span');
              spySpan.textContent = `SPY: $${spy.toFixed(2)}`;

              const fbySpan = document.createElement('span');
              fbySpan.textContent = `FBY: $${fby.toFixed(2)}`;

              const rpySpan = document.createElement('span');
              rpySpan.textContent = `RPY: $${rpy.toFixed(2)}`;

              const roiSpan = document.createElement('span');
              roiSpan.textContent = `ROI: ${roi.toFixed(2)}%`;
              
              // Apply color coding
              if (roi > 100) {
                  roiSpan.style.color = 'green';
              } else if (roi < 50) {
                  roiSpan.style.color = 'red';
              } else {
                  roiSpan.style.color = 'lightblue';
              }

              // Append spans to target element
              targetElement.appendChild(document.createElement('br'));
              targetElement.appendChild(roiSpan);
              targetElement.appendChild(document.createElement('br'));
              targetElement.appendChild(spySpan);
              targetElement.appendChild(document.createElement('br'));
              targetElement.appendChild(fbySpan);
              targetElement.appendChild(document.createElement('br'));
              targetElement.appendChild(rpySpan);

              // Mark the element as processed
              element.setAttribute('data-processed', 'true');
          } else {
          }
      } else if (childElement.textContent.includes("Rollbots")) {

          // Find target element
          const targetElement = element.querySelector('.css-12g0wy1 .css-vfpi8t .css-1rtd48a');
          if (targetElement) {
              // Find spans within target element
              const spans = targetElement.querySelectorAll('span');
              if (spans.length < 7) {
                  return;
              }

              // Calculate values
              const seventhSpanValue = parseFloat(spans[6].textContent.replace('K', '000'));
              const pricePer100k = (listedPrice / seventhSpanValue) * 100000;

              // Create span to display value
              const priceSpan = document.createElement('span');
              priceSpan.textContent = `PPS 100k: $${pricePer100k.toFixed(2)}`;
              
              // Apply color coding
              if (pricePer100k < 300) {
                  priceSpan.style.color = 'green';
              } else if (pricePer100k > 400) {
                  priceSpan.style.color = 'red';
              } else {
                  priceSpan.style.color = 'lightblue';
              }

              // Append span to target element
              targetElement.appendChild(document.createElement('br'));
              targetElement.appendChild(priceSpan);

              // Mark the element as processed
              element.setAttribute('data-processed', 'true');
          }
      } 
  });
}

/**
 * Observes the DOM for changes and calls appendData when new elements are added.
 */
function observeDOM() {
  const observer = new MutationObserver((mutations) => {
      let processed = false;
      mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
              if (node.nodeType === 1) {
                  processed = true;
              }
          });
      });
      if (processed) {
          appendData();
      }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Call appendData and observeDOM when the page finishes loading
window.addEventListener('load', () => {
  appendData();
  observeDOM();
});
