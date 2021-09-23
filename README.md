### What it does
skytunes takes in an user's location and Spotify information and builds a recommended personalized playlist based on music markers that are correlated with specific weather patterns. It then embeds a Spotify player, allowing the user to listen to their customized playlist in their browser.

### How we built it
We created an algorithm for music recommendation based on song danceability, energy, and valence (how positive a song sounds). Cooler rainy weather produces more calming music, and hot clear weather produces energetic songs that make you want to dance. This was implemented into our web app using React with the Spotify and Open Weather APIs.
