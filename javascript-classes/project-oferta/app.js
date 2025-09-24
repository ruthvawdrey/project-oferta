// Store bids as an object: { bidderName: amount }
let bids = JSON.parse(localStorage.getItem('bids')) || {};

// Utility to render all bids
function renderBids() {
  const bidsDiv = document.getElementById('bids');
  const entries = Object.entries(bids);
  if (entries.length === 0) {
    bidsDiv.innerHTML = '<div>No bids yet.</div>';
  } else {
    bidsDiv.innerHTML = entries
      .map(([bidder, amount]) => `<div>${bidder}: $${amount}</div>`)
      .join('');
  }
  renderHighestBid();
}

// Utility to render highest bid
function renderHighestBid() {
  const highestBidDiv = document.getElementById('highestBid');
  const entries = Object.entries(bids);
  if (entries.length === 0) {
    highestBidDiv.textContent = 'Highest Bid: None';
    return;
  }
  // Find the highest bid
  let [highestBidder, highestAmount] = entries[0];
  entries.forEach(([bidder, amount]) => {
    if (Number(amount) > Number(highestAmount)) {
      highestBidder = bidder;
      highestAmount = amount;
    }
  });
  highestBidDiv.textContent = `Highest Bid: ${highestBidder} with $${highestAmount}`;
}

// Place bid for a bidder
function placeBid(bidderInputId) {
  const input = document.getElementById(bidderInputId);
  const amount = Number(input.value);
  const bidder = input.placeholder.replace(' Bid', '');

  if (!amount || amount <= 0) {
    alert('Please enter a valid bid amount.');
    return;
  }

  bids[bidder] = amount;
  localStorage.setItem('bids', JSON.stringify(bids));
  input.value = '';
  renderBids();
}

// Clear all bids
function clearBids() {
  bids = {};
  localStorage.removeItem('bids');
  renderBids();
}

// Initial render
window.onload = renderBids;