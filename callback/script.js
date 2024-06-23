document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    
    const messageElement = document.getElementById('message');
    
    if (code) {
        messageElement.textContent = `Code: ${code} \nRequesting token...`;

        const myHeaders = new Headers();
        myHeaders.append("x-api-key", "d616944dd57c44f1a61f32950f7f692d");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Cookie", "Q6dA7j3mn3WPBQVV61rt5CrQXv0q+I9ddZfGro+PognXQwjWM8PS+VE_=v1Bd5Rgw__GEs; __cflb=0H28vP5GxS7vgVH4MZGXUj1cFxeg3iUzx2MtGWy6M3q; bungleanon=sv=BAAAAABCgAAAAAAAAOOezQEAAAAAAAAAAAAAAACowYBbw5PcCEAAAACqNhD/Yj70YFZtN7ZR5CvlFVysmOnzx+iLAi0QKoNK73sB1NKAcu5lEoxXxDp4mYeOpzXZcXmYV/4WHAgqCmYG&cl=MC4zMjgzNC4zMDI1Mjc3MQ==; bungled=8921323513194284137; bungledid=B1VoxY3sm9RPnMFUxG2R+PiowYBbw5PcCAAA");

        const urlencoded = new URLSearchParams();
        urlencoded.append("client_id", "47402");
        urlencoded.append("grant_type", "authorization_code");
        urlencoded.append("code", code);
        urlencoded.append("client_secret", "WTK6KlP2PWEJJxFHWVH8R74u2QxLb58aEdfPZ5nff1Y");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow"
        };

        fetch("https://www.bungie.net/Platform/App/OAuth/Token/", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                messageElement.textContent = `Access code: ${code} \n Refresh token: ${result.refresh_token}`;

            })
            .catch((error) => {
                console.error(error);
                messageElement.textContent = `Code: ${code} \nError: ${error.message}`;
            });

    } else {
        messageElement.textContent = 'No code found.';
    }
});
