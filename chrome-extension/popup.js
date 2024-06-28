document.getElementById('summarize').addEventListener('click', async () => {
    const inputText = document.getElementById('input-text').value;
    const summaryDiv = document.getElementById('summary');
    summaryDiv.innerHTML = 'Summarizing...';
  
    const response = await fetch('https://api-inference.huggingface.co/models/EE21/BART-ToSSimplify', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer HUGGINFACEKEY',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputs: inputText })
    });
  
    const data = await response.json();
    const summary = data[0]?.summary_text || 'Error in summarization';
  
    summaryDiv.innerHTML = summary;
  });
  
