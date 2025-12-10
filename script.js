function submitVote() {
  const input = document.getElementById("voteInput").value;
  const msg = document.getElementById("voteMsg");
  if (input.trim()) {
    msg.textContent = `Thanks for voting for "${input}"!`;
  } else {
    msg.textContent = "Please enter a dish name before voting.";
  }
}