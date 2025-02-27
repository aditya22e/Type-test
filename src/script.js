let startTime, interval;
        const textContainer = document.getElementById("paragraphs");
        const typingArea = document.getElementById("typing-area");
        const speedDisplay = document.getElementById("speed");
        const accuracyDisplay = document.getElementById("accuracy");
        const restartButton = document.getElementById("restart");
        const finishButton = document.getElementById("finish");

        const sentences = [
            "The quick brown fox jumps over the lazy dog, reminding us that agility often surpasses idleness. A journey of a thousand miles begins with a single step, just as every great endeavor starts small. To be or not to be is the question we all face, for all that glitters is not gold, and the pen remains mightier than the sword.",
            "Life is a journey filled with unexpected twists and turns. Every challenge we face shapes us into who we are meant to be. Sometimes, the path ahead seems unclear, but persistence and determination help us push forward. The lessons we learn along the way make us stronger. Embracing change is essential for growth, and with the right mindset, we can overcome any obstacle that stands in our way.",
            "Art transcends time, capturing emotions and stories. Whether in paintings, sculptures, or performances, art reflects culture and creativity. Artists express their thoughts and visions through various mediums. Art has the power to inspire, provoke, and heal. Every piece tells a unique story, leaving an impact on its audience. Creativity fuels artistic expression, allowing individuals to share perspectives in meaningful and lasting ways.",
            "The power of gratitude lies in appreciating the present moment. Acknowledging the good in life fosters contentment and happiness. Gratitude shifts focus from what’s lacking to what’s abundant. Practicing gratitude daily enhances overall well-being. It strengthens relationships and promotes a positive mindset. Expressing thanks, whether in words or actions, spreads joy. A grateful heart leads to a fulfilling and meaningful life.",
            "Family is a source of love, support, and strength. The bonds shared within a family shape values and beliefs. Through ups and downs, family remains a constant presence. Communication and understanding foster harmony. Spending quality time together strengthens relationships. While every family is unique, the love and connection they provide are irreplaceable. Cherishing family moments creates lifelong memories that bring warmth and comfort.",
            "Time management is essential for productivity and balance. Prioritizing tasks helps achieve goals efficiently. Procrastination can hinder progress, but discipline and organization lead to success. Setting deadlines and breaking tasks into smaller steps improves focus. A well-structured routine creates stability. While work is important, allocating time for relaxation and hobbies prevents burnout. Mastering time management allows for a fulfilling and stress-free lifestyle.",
            "Kindness is a powerful force that spreads positivity. A simple act of compassion can brighten someone's day. Whether through words or actions, kindness creates meaningful connections. It requires no cost but holds immense value. Encouraging kindness fosters a supportive and inclusive community. When people treat each other with respect and empathy, the world becomes a better place. Small gestures can lead to lasting impacts.",
            "Creativity fuels innovation, leading to groundbreaking ideas and solutions. It manifests in art, music, literature, and technology. Thinking outside the box encourages problem-solving and originality. Everyone possesses creativity in some form, and nurturing it enhances personal and professional growth. Experimenting, failing, and learning are essential to the creative process. Whether painting, writing, or designing, expressing creativity enriches life and broadens perspectives.",
            "Education is the foundation of progress and opportunity. It empowers individuals with knowledge and skills for a better future. Learning is a lifelong process, extending beyond classrooms. Curiosity drives discovery and innovation. Teachers play a vital role in shaping young minds and inspiring growth. Investing in education benefits society as a whole, creating informed and capable citizens. Knowledge has the power to transform lives and communities.",
            "The ocean holds countless wonders, from vibrant coral reefs to mysterious deep-sea creatures. Its waves create a calming effect, drawing people to its shores. Marine life flourishes beneath the surface, showcasing nature's diversity. However, pollution threatens this fragile ecosystem. Protecting the ocean is essential for preserving its beauty and resources. Sustainable practices and conservation efforts ensure future generations can enjoy the sea’s wonders",
            "Dreams inspire us to aim higher and push beyond limits. They fuel ambition and creativity, motivating us to turn aspirations into reality. While dreams require effort and resilience, they make life exciting. Pursuing one's passion leads to fulfillment and personal growth. Challenges may arise, but staying focused on goals ensures progress. With perseverance, even the most ambitious dreams can be achieved, making the journey worthwhile",
            "Cooking is both an art and a science. The right combination of flavors, textures, and techniques creates delicious dishes. Preparing meals at home allows for creativity and healthier choices. Whether baking, grilling, or sautéing, cooking brings people together. The joy of sharing a homemade meal with loved ones is priceless. Experimenting with new recipes enhances culinary skills and makes dining an enjoyable experience",
            "Exercise is crucial for maintaining physical and mental health. Regular workouts strengthen the body, boost energy, and reduce stress. Whether it's running, yoga, or weightlifting, staying active promotes overall well-being. Exercise also improves mood by releasing endorphins, known as 'happy hormones'. Making fitness a habit leads to a healthier and more fulfilling life. Consistency is key, and small steps toward an active lifestyle make a big difference.",
            "The universe is vast and mysterious, filled with countless stars and galaxies. Scientists continue to explore its secrets, searching for answers about our existence. Space travel, black holes, and distant planets captivate our imagination. While much remains unknown, every discovery brings us closer to understanding the cosmos. The beauty and complexity of the universe remind us of how small we are in the grand scheme of things.",
            "Hard work and dedication are key ingredients to success. While talent plays a role, perseverance and discipline are what truly make a difference. Challenges and failures are inevitable, but they provide opportunities for learning and growth. Setting goals and staying committed to them leads to progress. The path to success is rarely easy, but with determination and a positive mindset, anything is possible",
            "Friendship is one of life's greatest treasures. True friends offer support, laughter, and companionship through every stage of life. They celebrate our successes and stand by us during difficult times. Friendship is built on trust, understanding, and shared experiences. A strong bond can last a lifetime, providing comfort and encouragement. In a world full of uncertainties, having good friends makes the journey more meaningful and enjoyable.",
            "Music has a profound influence on emotions, memories, and creativity. It speaks to the soul in ways words cannot. Different genres reflect various moods, from upbeat rhythms to soothing melodies. Songs tell stories, evoke feelings, and bring people together. Whether playing an instrument, singing, or simply listening, music is a universal language. It inspires, heals, and provides comfort during life's highs and lows.",
            "Books have the power to transport us to different worlds and expand our imagination. Reading enhances our knowledge, vocabulary, and critical thinking skills. A good book can be an escape, a source of inspiration, or a teacher. Whether fiction or non-fiction, each story leaves an impact. The joy of discovering new authors and genres keeps the love of reading alive. Books connect us across time and space",
            "The beauty of nature is unparalleled, offering tranquility and inspiration. From towering mountains to serene beaches, every landscape tells a story. Spending time outdoors refreshes the mind and strengthens the body. The rustling of leaves, chirping birds, and flowing rivers create a soothing symphony. Protecting the environment is our responsibility, ensuring future generations can enjoy the wonders of the natural world just as we do today",
            "Traveling opens doors to new experiences, cultures, and perspectives. It allows us to step out of our comfort zones and embrace diversity. Exploring different countries teaches us about history, traditions, and lifestyles. The memories we create during our travels stay with us forever. Meeting new people and tasting unique cuisines make every journey special. Whether near or far, travel enriches our lives and broadens our understanding of the world",
            "Technology has revolutionized the way we communicate, work, and live. From smartphones to artificial intelligence, advancements continue to reshape our world. While innovation brings efficiency and convenience, it also presents ethical challenges. The key is to find a balance between technological progress and human values. As we integrate technology into daily life, we must remain mindful of its impact on society and future generations",
        ];

        function getRandomSentence() {
            return sentences[Math.floor(Math.random() * sentences.length)];
        }

        function startTest() {
            textContainer.innerText = getRandomSentence();
            typingArea.value = "";
            startTime = null;
            clearInterval(interval);
            speedDisplay.innerText = "WPM: 0";
            accuracyDisplay.innerText = "Accuracy: 100%";
        }

        typingArea.addEventListener("input", () => {
            if (!startTime) {
                startTime = new Date().getTime();
                interval = setInterval(updateStats, 1000);
            }
        });
        
        typingArea.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                finishTest();
            }
        });

        function updateStats() {
            const elapsedTime = (new Date().getTime() - startTime) / 60000;
            const typedText = typingArea.value;
            const correctChars = typedText.split('').filter((char, i) => char === textContainer.innerText[i]).length;
            const accuracy = (correctChars / typedText.length) * 100 || 100;
            const wpm = (typedText.length / 5) / elapsedTime || 0;

            speedDisplay.innerText = `WPM: ${Math.round(wpm)}`;
            accuracyDisplay.innerText = `Accuracy: ${Math.round(accuracy)}%`;
        }

        function finishTest() {
            clearInterval(interval);
            alert(`Test Finished!\n${speedDisplay.innerText}\n${accuracyDisplay.innerText}`);
        }

        restartButton.addEventListener("click", startTest);
        finishButton.addEventListener("click", finishTest);

        startTest();