// Question data structure
const questions = {
    Math: {
        Algebra: {
            Easy: ["Solve 5 + 3", "Find x if x + 7 = 12"],
            Medium: ["Solve x² + 2x - 15 = 0", "Simplify (3x + 5)(x - 4)"],
            Hard: ["Solve 3x² + 5x - 2 = 0", "Find the roots of x³ - 6x² + 11x - 6 = 0"]
        }
    },
    Science: {
        Physics: {
            Easy: ["What is force?", "State Newton's first law of motion"],
            Medium: ["Explain the difference between speed and velocity", "What is Ohm's Law?"],
            Hard: ["Derive the equation for acceleration due to gravity", "Explain the concept of work-energy theorem"]
        }
    },
    History: {
        "Ancient Civilizations": {
            Easy: ["Who was Alexander the Great?", "Name the first civilization in history"],
            Medium: ["Explain the significance of the Egyptian pyramids", "Describe the fall of the Roman Empire"],
            Hard: ["Analyze the causes of the rise and fall of the Gupta Empire", "Discuss the influence of Greek philosophy on Western thought"]
        }
    },
    Geography: {
        Maps: {
            Easy: ["What is the capital of India?", "Name the seven continents of the world"],
            Medium: ["What is the Prime Meridian?", "Explain the concept of time zones"],
            Hard: ["Discuss the geographical features of the Himalayas", "Analyze the impact of deforestation on climate change"]
        }
    }
};

// Function to update the topics based on the selected subject
function updateTopics() {
    const subject = document.getElementById('subject').value;
    const topicSelect = document.getElementById('topic');

    // Clear current topics
    topicSelect.innerHTML = '';

    // Get the relevant topics for the selected subject
    const topics = Object.keys(questions[subject]);
    
    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Topic';
    topicSelect.appendChild(defaultOption);

    // Add the relevant topic options
    topics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic;
        topicSelect.appendChild(option);
    });
}

// Function to generate the question paper
function generatePaper() {
    const subject = document.getElementById('subject').value;
    const topic = document.getElementById('topic').value;
    const difficulty = document.getElementById('difficulty').value;

    if (!subject || !topic || !difficulty) {
        alert('Please select all fields.');
        return;
    }

    const selectedQuestions = questions[subject][topic][difficulty];
    const questionList = document.getElementById('questionsList');
    questionList.innerHTML = ''; // Clear any previous results

    if (selectedQuestions) {
        selectedQuestions.forEach((question, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${question}`;
            questionList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = "No questions available for the selected criteria.";
        questionList.appendChild(li);
    }
}

// Initialize topics on page load
updateTopics();
