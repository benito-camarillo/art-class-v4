window.onload = function () {
    const response = document.getElementById('response');
   }

async function ask() {
    const prompt = document.getElementById('prompt').value;
    let chatgpt;
    console.log('ask function called');
    response.innerText = 'Loading...';

    let data = {
        "model": "gpt-3.5-turbo",
        "messages": [
        {
        "role": "system",
            "content": "Hello. You are ArtClassGPT. You are designed to assist users with school work, and overall just hang out with the end user."
        },
        {
            "role": "user",
            "content": prompt
        }
        ],
        "temperature": 0.7
    }
    try {
        chatgpt = await fetch('https://api.shuttle.rip/v1/chat/completions', {
            method: 'POST',
            headers: {
            'Authorization': 'Bearer sk-1092444113082785812-24390',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            });
        } catch (err) {
    console.error(err);
    }

    if (chatgpt && chatgpt.ok) {
        try {
          let json = await chatgpt.json();
          response.innerText = json.choices[0].message.content;
        } catch (error) {
          response.innerText = 'There was an error while performing your request. Please join https://discord.gg/desmos and report this error.';
        }
      } else {
        response.innerText = 'There was an error while performing your request. Please join https://discord.gg/desmos and report this error.';
      }
    }
