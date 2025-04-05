// Global variables
const exercises = ["Bench Press", "Lat Pulldown", "Seated Overhead Press", "Front Squat"];
const allMovements = [
    "Bench Press", "Incline Bench Press", "Decline Bench Press", "Cable Chest Press", 
    "Overhead Press", "Military Press", "Seated Overhead Press", "Shoulder Press",
    "Lat Pulldown", "Wide Grip Lat Pulldown", "Pull-Up", "Chin-Up",
    "Bent-Over Row", "Seated Row", "Pendlay Row",
    "Front Squat", "Back Squat", "Deadlift", "Romanian Deadlift", "Sumo Deadlift",
    "Cable Incline Press", "Cable Decline Press", "Cable Chest Fly", "Dumbbell Fly",
    "Tricep Pushdown", "Overhead Tricep Extension", "Tricep Kickback", "Close-Grip Bench Press",
    "Lateral Raise", "Front Raise", "Upright Row", "Shrug",
    "Straight-Arm Pulldown", "Single-Arm Row", "Face Pull", "Reverse Fly",
    "Bicep Curl", "Hammer Curl", "Concentration Curl", "Preacher Curl",
    "Goblet Squat", "Lunge", "Reverse Lunge", "Split Squat", "Step-Up", "Leg Press",
    "Hip Thrust", "Glute Bridge", "Hip Abduction", "Hip Adduction", "Glute Kickback",
    "Cable Crunch", "Woodchopper", "Pallof Press", "Hanging Leg Raise", "Russian Twist", 
    "Ab Rollout", "Side Plank", "Leg Raise",
    "Standing Chest Press", "Incline Chest Press", "Decline Chest Press", "Mid-Level Fly", "High Fly", "Low Fly", 
    "Single-Arm Chest Press", "Crossover", "Chest Pull", "Chest Squeeze", "Thruster",
    "Close-Grip Lat Pulldown", "Single-Arm Pulldown", "Wide-Grip Row", "Reverse-Grip Row", "Deadlift to Row", "Burpee Pull",
    "Single-Arm Shoulder Press", "High Pull", "Internal Rotation", "External Rotation", "Clean and Press", "Squat to Press",
    "High Curl", "Reverse Curl", "Bayesian Curl", "Rope Curl", "Drag Curl", "Lunge to Curl",
    "Rope Pushdown", "Single-Arm Pushdown", "Single-Arm Overhead Extension", "Reverse-Grip Pushdown", "Lying Tricep Extension", 
    "Cross-Body Tricep Extension",
    "Single-Leg Press", "Hack Squat", "Knee Raise",
    "Single-Leg Deadlift", "Pull-Through", "Stiff-Leg Deadlift", "Good Morning", "Hip Hinge", "Straight-Leg Pull", 
    "Reverse Pull", "Standing Leg Pull",
    "Squat with Hip Pull", "Hip Abduction Pull", "Hip Extension Pull", "Lateral Pull", "Standing Hip Pull", 
    "Standing Adduction Pull", "Squat with Lateral Pull", "Rotational Lunge", "Glute Pull",
    "Woodchopper (High to Low)", "Woodchopper (Low to High)", "Standing Crunch", "Kneeling Crunch", "Anti-Rotation Press", 
    "Plank Row", "Oblique Twist", "Reverse Crunch", "Standing Twist", "Farmer’s Carry", "Core Rotation Press"
];
const bodyweightMovements = [
    "Push-Up", "Wide Push-Up", "Narrow Push-Up", "Incline Push-Up", "Decline Push-Up", "Pike Push-Up", "Staggered Push-Up", "Chest Squeeze",
    "Superman Hold", "Reverse Snow Angel", "Prone Y-Raise", "Prone T-Raise", "Bird Dog", "Bench Reverse Fly", "Scapular Push-Up",
    "Arm Circles", "Pike Press", "Shoulder Tap", "Bench Dips", "Plank to Downward Dog", "Lateral Plank Walk", "Handstand Hold Against Bench",
    "Isometric Bicep Hold", "Bench Bicep Curl", "Doorway Curl",
    "Tricep Dip", "Bench Tricep Push-Up", "Plank Tricep Extension", "Reverse Plank", "Diamond Push-Up",
    "Bodyweight Squat", "Wall Sit", "Single-Leg Squat to Bench", "Jump Squat",
    "Hamstring Walkout", "Nordic Hamstring Drop", "Reverse Leg Lift", "Bench Hamstring Bridge",
    "Donkey Kick", "Fire Hydrant", "Clamshell", "Side-Lying Leg Lift", "Squat with Side Leg Lift",
    "Plank", "Mountain Climber", "Bicycle Crunch", "Bench Sit-Up"
];
const stretches = ["Hamstring Stretch", "Quad Stretch", "Chest Opener", "Cat-Cow Stretch", "Side Bend"];

const attachments = {
    "Cable Chest Press": "Handles", "Cable Incline Press": "Handles", "Cable Decline Press": "Handles", "Cable Chest Fly": "Handles",
    "Mid-Level Fly": "Handles", "High Fly": "Handles", "Low Fly": "Handles", "Crossover": "Handles", "Chest Pull": "Handles",
    "Standing Chest Press": "Handles", "Incline Chest Press": "Handles", "Decline Chest Press": "Handles", "Single-Arm Chest Press": "Handle",
    "Chest Squeeze": "Handles", "Thruster": "Barbell",
    "Lat Pulldown": "Barbell", "Wide Grip Lat Pulldown": "Barbell", "Close-Grip Lat Pulldown": "Barbell", "Single-Arm Pulldown": "Handle",
    "Seated Row": "Handles", "Wide-Grip Row": "Barbell", "Reverse-Grip Row": "Barbell", "Single-Arm Row": "Handle", "Deadlift to Row": "Handles",
    "Burpee Pull": "Barbell", "Straight-Arm Pulldown": "Barbell", "Face Pull": "Rope",
    "Shoulder Press": "Handles", "Single-Arm Shoulder Press": "Handle", "High Pull": "Handles", "Internal Rotation": "Handle",
    "External Rotation": "Handle", "Clean and Press": "Barbell", "Squat to Press": "Barbell",
    "Tricep Pushdown": "Barbell", "Rope Pushdown": "Rope", "Single-Arm Pushdown": "Handle", "Overhead Tricep Extension": "Rope",
    "Single-Arm Overhead Extension": "Handle", "Reverse-Grip Pushdown": "Barbell", "Lying Tricep Extension": "Barbell",
    "Cross-Body Tricep Extension": "Handle",
    "Bicep Curl": "Barbell", "High Curl": "Barbell", "Reverse Curl": "Barbell", "Bayesian Curl": "Handle", "Rope Curl": "Rope",
    "Drag Curl": "Barbell", "Lunge to Curl": "Handles",
    "Single-Leg Press": "Handles", "Hack Squat": "Barbell", "Knee Raise": "Handles",
    "Pull-Through": "Rope", "Straight-Leg Pull": "Rope", "Reverse Pull": "Rope", "Standing Leg Pull": "Handle",
    "Squat with Hip Pull": "Handles", "Hip Abduction Pull": "Handle", "Hip Extension Pull": "Handle", "Lateral Pull": "Handle",
    "Standing Hip Pull": "Handle", "Standing Adduction Pull": "Handle", "Squat with Lateral Pull": "Handles", "Rotational Lunge": "Handle",
    "Glute Pull": "Handle",
    "Cable Crunch": "Rope", "Woodchopper": "Handle", "Woodchopper (High to Low)": "Handle", "Woodchopper (Low to High)": "Handle",
    "Pallof Press": "Handle", "Standing Crunch": "Rope", "Kneeling Crunch": "Rope", "Anti-Rotation Press": "Handle", "Plank Row": "Handle",
    "Oblique Twist": "Handle", "Reverse Crunch": "Handles", "Standing Twist": "Handle", "Farmer’s Carry": "Handles", "Core Rotation Press": "Handle"
};

let weightsDict = {};
let oneRmDict = {};
let movement1rmDict = {};
let feedbackData = {};
let userOptions = { daysPerWeek: 3, duration: "30 minutes", bodyweight: false, fivePoundIncrements: false, vacationMode: false, gender: "", height: "", weight: "", goal: "" };
let workoutPlans = { 2: {}, 3: {}, 4: {}, 5: {}, 6: {} };
let workoutLog = [];
let currentWorkoutState = { day: null, movementIdx: 0, setIdx: 0, sets: [] };

console.log("app.js loaded");

// Core calculations
function calculate1rm(weight, reps) { return weight * (1 + (reps / 30)); }
function validateInput(weightStr) {
    const weight = parseFloat(weightStr);
    if (isNaN(weight)) return [false, "Please enter a valid number (e.g., 150)."];
    if (weight <= 0) return [false, "Please enter a weight greater than 0."];
    return [true, weight];
}
function estimateInitial1rm(height, weight, gender) {
    const factor = gender === "M" ? 1.1 : 0.9;
    const bw1rm = weight * factor;
    return { "Bench Press": bw1rm * 0.8, "Lat Pulldown": bw1rm * 0.7, "Seated Overhead Press": bw1rm * 0.5, "Front Squat": bw1rm * 1.0 };
}
function getMovement1rm(movement, useFeedback = true) {
    if (useFeedback && movement1rmDict[movement]) return movement1rmDict[movement];
    // Chest
    if (["Bench Press", "Incline Bench Press", "Decline Bench Press", "Cable Chest Press", "Standing Chest Press", "Incline Chest Press", 
         "Decline Chest Press", "Single-Arm Chest Press", "Chest Squeeze", "Thruster", "Push-Up", "Wide Push-Up", "Narrow Push-Up", 
         "Incline Push-Up", "Decline Push-Up", "Pike Push-Up", "Staggered Push-Up"].includes(movement)) return oneRmDict["Bench Press"] * 1.0;
    if (["Mid-Level Fly", "High Fly", "Low Fly", "Crossover", "Cable Chest Fly", "Dumbbell Fly", "Chest Pull"].includes(movement)) return oneRmDict["Bench Press"] * 0.8;
    // Back
    if (["Lat Pulldown", "Wide Grip Lat Pulldown", "Close-Grip Lat Pulldown", "Pull-Up", "Chin-Up", "Single-Arm Pulldown", "Burpee Pull"].includes(movement)) return oneRmDict["Lat Pulldown"] * 1.0;
    if (["Bent-Over Row", "Seated Row", "Pendlay Row", "Wide-Grip Row", "Reverse-Grip Row", "Single-Arm Row", "Deadlift to Row", 
         "Superman Hold", "Reverse Snow Angel", "Prone Y-Raise", "Prone T-Raise", "Bird Dog", "Bench Reverse Fly"].includes(movement)) return oneRmDict["Lat Pulldown"] * 0.9;
    if (["Straight-Arm Pulldown", "Face Pull", "Reverse Fly", "Scapular Push-Up"].includes(movement)) return oneRmDict["Lat Pulldown"] * 0.7;
    // Shoulders
    if (["Overhead Press", "Military Press", "Seated Overhead Press", "Shoulder Press", "Single-Arm Shoulder Press", "Clean and Press", 
         "Squat to Press", "Pike Press", "Handstand Hold Against Bench"].includes(movement)) return oneRmDict["Seated Overhead Press"] * 1.0;
    if (["Lateral Raise", "Front Raise", "Upright Row", "Shrug", "High Pull", "Internal Rotation", "External Rotation", "Arm Circles", 
         "Shoulder Tap", "Lateral Plank Walk"].includes(movement)) return oneRmDict["Seated Overhead Press"] * 0.5;
    if (["Reverse Fly", "Bench Dips", "Plank to Downward Dog"].includes(movement)) return oneRmDict["Seated Overhead Press"] * 0.7;
    // Biceps
    if (["Bicep Curl", "Hammer Curl", "Concentration Curl", "Preacher Curl", "High Curl", "Reverse Curl", "Bayesian Curl", "Rope Curl", 
         "Drag Curl", "Lunge to Curl", "Isometric Bicep Hold", "Bench Bicep Curl", "Doorway Curl"].includes(movement)) return oneRmDict["Lat Pulldown"] * 0.35;
    // Triceps
    if (["Tricep Pushdown", "Overhead Tricep Extension", "Tricep Kickback", "Close-Grip Bench Press", "Rope Pushdown", "Single-Arm Pushdown", 
         "Single-Arm Overhead Extension", "Reverse-Grip Pushdown", "Lying Tricep Extension", "Cross-Body Tricep Extension", 
         "Tricep Dip", "Narrow Push-Up", "Bench Tricep Push-Up", "Plank Tricep Extension", "Reverse Plank", "Diamond Push-Up"].includes(movement)) return oneRmDict["Seated Overhead Press"] * 0.4;
    // Quads
    if (["Front Squat", "Back Squat", "Goblet Squat", "Bodyweight Squat", "Squat with Hip Pull", "Squat with Lateral Pull", "Hack Squat", 
         "Wall Sit", "Single-Leg Squat to Bench", "Jump Squat"].includes(movement)) return oneRmDict["Front Squat"] * 1.0;
    if (["Lunge", "Reverse Lunge", "Split Squat", "Step-Up", "Leg Press", "Single-Leg Press", "Knee Raise", 
         "Rotational Lunge"].includes(movement)) return oneRmDict["Front Squat"] * 0.85;
    // Hamstrings
    if (["Deadlift", "Romanian Deadlift", "Sumo Deadlift", "Single-Leg Deadlift", "Stiff-Leg Deadlift", "Good Morning", "Hip Hinge", 
         "Hamstring Walkout", "Nordic Hamstring Drop", "Bench Hamstring Bridge"].includes(movement)) return oneRmDict["Front Squat"] * 1.2;
    if (["Pull-Through", "Straight-Leg Pull", "Reverse Pull", "Standing Leg Pull", "Reverse Leg Lift"].includes(movement)) return oneRmDict["Front Squat"] * 0.6;
    // Glutes
    if (["Hip Thrust", "Glute Bridge", "Hip Abduction", "Hip Adduction", "Glute Kickback", "Hip Abduction Pull", "Hip Extension Pull", 
         "Lateral Pull", "Standing Hip Pull", "Standing Adduction Pull", "Glute Pull", "Clamshell", 
         "Side-Lying Leg Lift", "Squat with Side Leg Lift"].includes(movement)) return oneRmDict["Front Squat"] * 0.6;
    if (["Donkey Kick", "Fire Hydrant"].includes(movement)) return oneRmDict["Front Squat"] * 0.5;
    // Core
    if (["Cable Crunch", "Woodchopper", "Pallof Press", "Hanging Leg Raise", "Russian Twist", "Ab Rollout", "Side Plank", "Leg Raise", 
         "Woodchopper (High to Low)", "Woodchopper (Low to High)", "Standing Crunch", "Kneeling Crunch", "Side Bend", "Anti-Rotation Press", 
         "Plank Row", "Oblique Twist", "Reverse Crunch", "Standing Twist", "Farmer’s Carry", "Core Rotation Press", "Plank", 
         "Mountain Climber", "Bicycle Crunch", "Bench Sit-Up"].includes(movement)) return oneRmDict["Front Squat"] * 0.3;
    return 0;
}
function isTwoHandleMovement(movement) {
    const twoHandleMovements = [
        "Cable Chest Press", "Cable Incline Press", "Cable Decline Press", "Cable Chest Fly", "Mid-Level Fly", "High Fly", "Low Fly", 
        "Crossover", "Chest Pull", "Thruster", "Seated Row", "Single-Arm Row", "Wide-Grip Row", "Reverse-Grip Row", "Face Pull", 
        "Reverse Fly", "Deadlift to Row", "Burpee Pull", "Shoulder Press", "Single-Arm Shoulder Press", "Lateral Raise", "Front Raise", 
        "High Pull", "Clean and Press", "Squat to Press", "Bicep Curl", "High Curl", "Hammer Curl", 
        "Reverse Curl", "Concentration Curl", "Preacher Curl", "Bayesian Curl", "Rope Curl", "Drag Curl", "Lunge to Curl", 
        "Tricep Pushdown", "Rope Pushdown", "Single-Arm Pushdown", "Overhead Tricep Extension", "Single-Arm Overhead Extension", 
        "Tricep Kickback", "Reverse-Grip Pushdown", "Lying Tricep Extension", "Cross-Body Tricep Extension", 
        "Front Squat", "Back Squat", "Split Squat", "Lunge", "Reverse Lunge", "Step-Up", "Single-Leg Press", 
        "Hack Squat", "Knee Raise", "Romanian Deadlift", "Single-Leg Deadlift", "Pull-Through", "Stiff-Leg Deadlift", "Good Morning", 
        "Hip Hinge", "Straight-Leg Pull", "Reverse Pull", "Standing Leg Pull", "Hip Thrust", "Squat with Hip Pull", "Hip Abduction Pull", 
        "Hip Extension Pull", "Lateral Pull", "Standing Hip Pull", "Standing Adduction Pull", "Squat with Lateral Pull", "Rotational Lunge", 
        "Glute Pull", "Woodchopper (High to Low)", "Woodchopper (Low to High)", "Russian Twist", "Standing Crunch", "Kneeling Crunch", 
        "Side Bend", "Anti-Rotation Press", "Plank Row", "Oblique Twist", "Reverse Crunch", "Standing Twist", "Farmer’s Carry", 
        "Core Rotation Press"
    ];
    return twoHandleMovements.includes(movement);
}
function getSimilarMovement(movement) {
    const groups = {
        "PushCompound": ["Bench Press", "Incline Bench Press", "Decline Bench Press", "Cable Chest Press", "Standing Chest Press", "Incline Chest Press", "Decline Chest Press", "Single-Arm Chest Press", "Thruster", "Overhead Press", "Military Press", "Seated Overhead Press", "Shoulder Press", "Single-Arm Shoulder Press", "Clean and Press", "Squat to Press", "Push-Up", "Wide Push-Up", "Narrow Push-Up", "Incline Push-Up", "Decline Push-Up", "Pike Push-Up", "Staggered Push-Up"],
        "PullCompound": ["Lat Pulldown", "Wide Grip Lat Pulldown", "Close-Grip Lat Pulldown", "Pull-Up", "Chin-Up", "Single-Arm Pulldown", "Bent-Over Row", "Seated Row", "Pendlay Row", "Wide-Grip Row", "Reverse-Grip Row", "Single-Arm Row", "Deadlift to Row", "Burpee Pull"],
        "LegsCompound": ["Front Squat", "Back Squat", "Deadlift", "Romanian Deadlift", "Sumo Deadlift", "Single-Leg Deadlift", "Stiff-Leg Deadlift", "Good Morning", "Hip Hinge", "Bodyweight Squat", "Squat with Hip Pull", "Squat with Lateral Pull", "Hack Squat"],
        "PushAccessory": ["Cable Incline Press", "Cable Decline Press", "Cable Chest Fly", "Dumbbell Fly", "Mid-Level Fly", "High Fly", "Low Fly", "Crossover", "Chest Pull", "Chest Squeeze", "Tricep Pushdown", "Overhead Tricep Extension", "Tricep Kickback", "Close-Grip Bench Press", "Rope Pushdown", "Single-Arm Pushdown", "Single-Arm Overhead Extension", "Reverse-Grip Pushdown", "Lying Tricep Extension", "Cross-Body Tricep Extension", "Tricep Dip", "Narrow Push-Up", "Bench Tricep Push-Up", "Plank Tricep Extension", "Reverse Plank", "Diamond Push-Up", "Arm Circles", "Shoulder Tap", "Lateral Plank Walk", "Bench Dips", "Plank to Downward Dog"],
        "PullAccessory": ["Straight-Arm Pulldown", "Face Pull", "Reverse Fly", "Bicep Curl", "Hammer Curl", "Concentration Curl", "Preacher Curl", "High Curl", "Reverse Curl", "Bayesian Curl", "Rope Curl", "Drag Curl", "Lunge to Curl", "Isometric Bicep Hold", "Bench Bicep Curl", "Doorway Curl", "Superman Hold", "Reverse Snow Angel", "Prone Y-Raise", "Prone T-Raise", "Bird Dog", "Bench Reverse Fly", "Scapular Push-Up"],
        "LegsAccessory": ["Goblet Squat", "Lunge", "Reverse Lunge", "Split Squat", "Step-Up", "Leg Press", "Single-Leg Press", "Knee Raise", "Wall Sit", "Single-Leg Squat to Bench", "Jump Squat", "Pull-Through", "Straight-Leg Pull", "Reverse Pull", "Standing Leg Pull", "Hip Thrust", "Glute Bridge", "Hip Abduction", "Hip Adduction", "Glute Kickback", "Hip Abduction Pull", "Hip Extension Pull", "Lateral Pull", "Standing Hip Pull", "Standing Adduction Pull", "Glute Pull", "Rotational Lunge", "Hamstring Walkout", "Nordic Hamstring Drop", "Reverse Leg Lift", "Bench Hamstring Bridge", "Donkey Kick", "Fire Hydrant", "Clamshell", "Side-Lying Leg Lift", "Squat with Side Leg Lift"],
        "Core": ["Cable Crunch", "Woodchopper", "Pallof Press", "Hanging Leg Raise", "Russian Twist", "Ab Rollout", "Side Plank", "Leg Raise", "Woodchopper (High to Low)", "Woodchopper (Low to High)", "Standing Crunch", "Kneeling Crunch", "Side Bend", "Anti-Rotation Press", "Plank Row", "Oblique Twist", "Reverse Crunch", "Standing Twist", "Farmer’s Carry", "Core Rotation Press", "Plank", "Mountain Climber", "Bicycle Crunch", "Bench Sit-Up"]
    };
    for (const [group, movements] of Object.entries(groups)) {
        if (movements.includes(movement)) {
            const alternatives = movements.filter(m => m !== movement);
            return alternatives[Math.floor(Math.random() * alternatives.length)] || movement;
        }
    }
    return movement;
}
function showFrame(frameId) {
    console.log(`Showing frame: ${frameId}`);
    document.querySelectorAll('.frame').forEach(frame => frame.classList.remove('active'));
    const frame = document.getElementById(frameId);
    if (frame) frame.classList.add('active');
    else console.error(`Frame with ID ${frameId} not found`);
}

function welcomePage() {
    console.log("Entering welcomePage");
    try {
        const frame = document.getElementById('welcomeFrame');
        if (!frame) throw new Error("welcomeFrame not found");
        frame.innerHTML = `
            <h2>FEAUXNAL</h2>
            ${!Object.keys(weightsDict).length ? '<button id="getStartedBtn">Get Started</button>' : `
                <button id="continueBtn">Continue</button>
                <h3>Strength Progress Over Time</h3>
                <canvas id="progressCanvas" width="380" height="250"></canvas>
            `}
            <div class="button-group">
                <button id="optionsBtn" class="small-btn">Options</button>
                ${Object.keys(weightsDict).length ? '<button id="strengthTestBtn" class="small-btn">Strength Test</button>' : ''}
            </div>
            ${Object.keys(weightsDict).length ? '<button id="resetBtn" class="reset-btn">Reset User Data</button>' : ''}
        `;

        if (!Object.keys(weightsDict).length) {
            const getStartedBtn = document.getElementById('getStartedBtn');
            if (getStartedBtn) getStartedBtn.addEventListener('click', testPage);
            else console.error("getStartedBtn not found");
        } else {
            const continueBtn = document.getElementById('continueBtn');
            const strengthTestBtn = document.getElementById('strengthTestBtn');
            const resetBtn = document.getElementById('resetBtn');
            if (continueBtn) continueBtn.addEventListener('click', showLandingPage);
            else console.error("continueBtn not found");
            if (strengthTestBtn) strengthTestBtn.addEventListener('click', testPage);
            else console.error("strengthTestBtn not found");
            if (resetBtn) resetBtn.addEventListener('click', resetUserData);
            else console.error("resetBtn not found");
            updateProgressGraph();
        }
        const optionsBtn = document.getElementById('optionsBtn');
        if (optionsBtn) optionsBtn.addEventListener('click', optionsPage);
        else console.error("optionsBtn not found");

        showFrame('welcomeFrame');
        console.log("welcomePage rendered successfully");
    } catch (error) {
        console.error("Error in welcomePage:", error);
        document.body.innerHTML = "<p style='color: red;'>An error occurred. Check the console for details.</p>";
    }
}

function testPage() {
    console.log("Entering testPage");
    const frame = document.getElementById('testFrame');
    frame.innerHTML = `
        <p>Enter a difficult weight you can lift for 5 reps, close to failure.</p>
        ${exercises.map(ex => `
            <div>
                <label>${ex}:</label>
                <input type="number" id="${ex.replace(/\s/g, '')}" step="0.1">
                <span>lbs</span>
            </div>
        `).join('')}
        <div>
            <button id="calcBtn">Calculate</button>
            <button id="clearBtn" disabled>Clear</button>
        </div>
        <p id="resultLabel">Enter weights, then Calculate.</p>
        <div id="goalFrame" style="display:none;">
            <label>Fitness Goal:</label>
            <select id="goal">
                <option value="">Select Goal</option>
                <option value="Build Muscle">Build Muscle</option>
                <option value="Increase Endurance">Increase Endurance</option>
                <option value="Lose Weight">Lose Weight</option>
            </select>
        </div>
        <div id="durationFrame" style="display:none;">
            <label>Workout Duration:</label>
            <select id="duration">
                <option value="">Select Duration</option>
                <option value="20 minutes">20 minutes</option>
                <option value="30 minutes">30 minutes</option>
                <option value="45 minutes">45 minutes</option>
                <option value="60 minutes">60 minutes</option>
            </select>
        </div>
        <button id="letsGoBtn" style="display:none;">Let's Go!</button>
    `;

    document.getElementById('calcBtn').addEventListener('click', calculateResults);
    document.getElementById('clearBtn').addEventListener('click', clearFields);
    document.getElementById('letsGoBtn').addEventListener('click', showLandingPage);
    showFrame('testFrame');
}

function calculateResults() {
    console.log("Entering calculateResults");
    const inputs = exercises.reduce((acc, ex) => {
        acc[ex] = document.getElementById(ex.replace(/\s/g, '')).value;
        return acc;
    }, {});

    weightsDict = {};
    oneRmDict = {};
    let allValid = true;

    for (const [exercise, weightStr] of Object.entries(inputs)) {
        const [isValid, result] = validateInput(weightStr);
        if (!isValid) {
            alert(`${exercise}: ${result}`);
            allValid = false;
            break;
        }
        weightsDict[exercise] = result;
        oneRmDict[exercise] = calculate1rm(result, 5);
    }

    if (allValid) {
        movement1rmDict = {};
        allMovements.concat(bodyweightMovements, stretches).forEach(m => {
            movement1rmDict[m] = allMovements.includes(m) ? getMovement1rm(m, false) : 0;
        });
        const resultText = `Strength test complete!\nSelect goal & duration below.\n\nEstimated 1-Rep Max Results:\n${Object.entries(oneRmDict).map(([ex, val]) => `${ex}: ${Math.round(val)} lbs`).join('\n')}`;
        document.getElementById('resultLabel').textContent = resultText;
        document.getElementById('goalFrame').style.display = 'block';
        document.getElementById('durationFrame').style.display = 'block';
        document.getElementById('letsGoBtn').style.display = 'block';
        document.getElementById('calcBtn').disabled = true;
        document.getElementById('clearBtn').disabled = false;
        saveUserData();
    }
}

function clearFields() {
    console.log("Clearing fields");
    weightsDict = {};
    oneRmDict = {};
    movement1rmDict = {};
    feedbackData = {};
    userOptions = { daysPerWeek: 3, duration: "30 minutes", bodyweight: false, fivePoundIncrements: false, vacationMode: false, gender: "", height: "", weight: "", goal: "" };
    workoutPlans = { 2: {}, 3: {}, 4: {}, 5: {}, 6: {} };
    workoutLog = [];
    currentWorkoutState = { day: null, movementIdx: 0, setIdx: 0, sets: [] };
    localStorage.clear();
    welcomePage();
}

function resetUserData() {
    console.log("Resetting user data");
    if (confirm("Are you sure you want to reset all user data? This cannot be undone.")) {
        clearFields();
    }
}
function showLandingPage() {
    console.log("Entering showLandingPage");
    const goal = document.getElementById('goal')?.value || userOptions.goal;
    const duration = document.getElementById('duration')?.value || userOptions.duration;
    if (!goal) return alert("Please select a fitness goal.");
    if (!duration) return alert("Please select a workout duration.");
    
    userOptions.goal = goal;
    userOptions.duration = duration;
    
    updateLandingDisplay();
    showFrame('landingFrame');
}

function updateLandingDisplay() {
    console.log("Entering updateLandingDisplay");
    const daysPerWeek = userOptions.daysPerWeek;
    const duration = parseInt(userOptions.duration.split(' ')[0]);
    const movementsPerDay = { 20: 3, 30: 4, 45: 5, 60: 6 }[duration];
    if (!Object.keys(workoutPlans[daysPerWeek]).length) generateWeeklyPlan();

    const frame = document.getElementById('landingFrame');
    frame.innerHTML = `
        <button id="backToWelcomeBtn">Back</button>
        <h2>This week's workouts (${userOptions.duration})</h2>
        <div id="tabs"></div>
    `;
    
    const tabs = document.getElementById('tabs');
    const currentDay = getCurrentDay();
    Object.entries(workoutPlans[daysPerWeek]).forEach(([day, movements], i) => {
        const tab = document.createElement('div');
        tab.className = 'tab';
        tab.innerHTML = `
            <h3>${day}</h3>
            ${movements.slice(0, movementsPerDay).map(m => `<p>${m}</p>`).join('')}
            ${day === currentDay ? `<button class="goWorkoutBtn" data-day="${day}">Go to Workout</button>` : ''}
        `;
        tabs.appendChild(tab);
    });

    document.querySelectorAll('.goWorkoutBtn').forEach(btn => {
        btn.addEventListener('click', () => {
            const day = btn.getAttribute('data-day');
            showWorkoutPage(day);
        });
    });
    document.getElementById('backToWelcomeBtn').addEventListener('click', welcomePage);
}

function showWorkoutPage(day) {
    console.log("Entering showWorkoutPage:", day);
    currentWorkoutState.day = day;
    currentWorkoutState.movementIdx = -1; // Start at warm-up
    currentWorkoutState.setIdx = 0;
    currentWorkoutState.sets = generateWorkoutSets(day);
    updateWorkoutDisplay();
    showFrame('workoutFrame');
}

function generateWorkoutSets(day) {
    const goal = userOptions.goal || "Build Muscle";
    const duration = parseInt(userOptions.duration.split(' ')[0]);
    const movementsPerDay = { 20: 3, 30: 4, 45: 5, 60: 6 }[duration];
    const movements = workoutPlans[userOptions.daysPerWeek][day].slice(0, movementsPerDay);
    const basePercentage = goal === "Build Muscle" ? 0.75 : goal === "Increase Endurance" ? 0.55 : 0.65;
    const setCount = goal === "Build Muscle" ? 4 : 3;

    return movements.map(movement => {
        const movement1rm = getMovement1rm(movement, true);
        let baseWeight = Math.round(movement1rm * basePercentage);
        if (userOptions.fivePoundIncrements) baseWeight = Math.round(baseWeight / 5) * 5;
        const totalWeight = bodyweightMovements.includes(movement) ? 0 : baseWeight;

        const isProgressive = Math.random() > 0.5;
        const sets = [];

        if (isProgressive) {
            const weightIncrementPercentage = goal === "Build Muscle" ? 0.05 : 0.03;
            const baseReps = goal === "Build Muscle" ? 12 : goal === "Increase Endurance" ? 18 : 14;
            for (let i = 0; i < setCount; i++) {
                const weightIncrease = movement1rm * weightIncrementPercentage * i;
                const weight = Math.round(totalWeight + weightIncrease);
                const reps = Math.max(6, baseReps - i * 2);
                sets.push({ weight, reps, actualWeight: null });
            }
        } else {
            const reps = goal === "Build Muscle" ? 10 : goal === "Increase Endurance" ? 15 : 12;
            for (let i = 0; i < setCount; i++) {
                sets.push({ weight: totalWeight, reps, actualWeight: null });
            }
        }
        return { movement, sets, feedback: null };
    });
}

function updateWorkoutDisplay() {
    console.log("Entering updateWorkoutDisplay:", currentWorkoutState);
    const { day, movementIdx, setIdx, sets } = currentWorkoutState;
    const duration = userOptions.duration;
    const focus = day.split(" - ")[1].split("/")[0].toLowerCase();
    const warmupOptions = {
        push: ["Push-Up", "Bench Dips"], chest: ["Push-Up", "Bench Dips"], shoulders: ["Arm Circles", "Pike Press"],
        pull: ["Superman Hold", "Scapular Push-Up"], back: ["Superman Hold", "Reverse Snow Angel"],
        legs: ["Bodyweight Squat", "Jump Squat"], core: ["Plank", "Mountain Climber"], arms: ["Narrow Push-Up", "Tricep Dip"],
        upper: ["Push-Up", "Superman Hold"], lower: ["Bodyweight Squat", "Jump Squat"]
    };
    const cooldownOptions = {
        push: ["Chest Opener", "Cat-Cow Stretch"], chest: ["Chest Opener", "Cat-Cow Stretch"], shoulders: ["Chest Opener", "Side Bend"],
        pull: ["Cat-Cow Stretch", "Hamstring Stretch"], back: ["Cat-Cow Stretch", "Hamstring Stretch"],
        legs: ["Hamstring Stretch", "Quad Stretch"], core: ["Cat-Cow Stretch", "Side Bend"], arms: ["Chest Opener", "Side Bend"],
        upper: ["Chest Opener", "Cat-Cow Stretch"], lower: ["Hamstring Stretch", "Quad Stretch"]
    };
    const warmups = warmupOptions[focus] || ["Push-Up", "Bodyweight Squat"];
    const cooldowns = cooldownOptions[focus] || ["Hamstring Stretch", "Chest Opener"];
    const totalSets = sets.reduce((acc, s) => acc + s.sets.length, 0);
    const completedSets = sets.slice(0, movementIdx).reduce((acc, s) => acc + s.sets.length, 0) + (movementIdx >= 0 ? setIdx : 0);
    const progressPercentage = movementIdx === -1 ? 0 : movementIdx > sets.length ? 100 : Math.round((completedSets / totalSets) * 100);

    const frame = document.getElementById('workoutFrame');
    
    if (movementIdx === -1) { // Warm-up page
        frame.innerHTML = `
            <button id="backToLandingBtn">Back</button>
            <h2>Workout (${duration})</h2>
            <h3>Warm-Up</h3>
            ${warmups.map(w => `<p>${w}: 10 reps</p>`).join('')}
            <button id="nextBtn">Start Workout</button>
        `;
        document.getElementById('nextBtn').addEventListener('click', () => {
            currentWorkoutState.movementIdx = 0;
            updateWorkoutDisplay();
        });
    } else if (movementIdx < sets.length) { // Main workout sets
        const { movement, sets: movementSets } = sets[movementIdx];
        const { weight, reps } = movementSets[setIdx];
        const attachment = attachments[movement];
        const weightNote = bodyweightMovements.includes(movement) ? "" : 
                          (attachment === "Handles" || attachment === "Handle") ? `(${Math.round(weight / 2)} lbs)` : 
                          `(${weight} lbs)`;
        const attachmentNote = attachment ? `<p>Use: ${attachment}</p>` : "";

        frame.innerHTML = `
            <button id="backToLandingBtn">Back</button>
            <h2>Workout (${duration})</h2>
            <div style="width: 100%; background: #333; height: 10px; margin: 10px 0;">
                <div style="width: ${progressPercentage}%; background: #4ECDC4; height: 100%;"></div>
            </div>
            <p>Progress: ${progressPercentage}% (${completedSets}/${totalSets} sets)</p>
            <h3>${movement} - Set ${setIdx + 1}</h3>
            <div class="movement">
                <p>Target: ${reps} reps ${weightNote}</p>
                ${attachmentNote}
                <input type="number" id="actualWeight" step="0.1" placeholder="Actual Weight">
                <span>lbs</span>
            </div>
            <button id="setCompleteBtn">Set Complete</button>
        `;
        document.getElementById('setCompleteBtn').addEventListener('click', () => completeSet());
    } else if (movementIdx === sets.length) { // Cool-down page
        frame.innerHTML = `
            <button id="backToLandingBtn">Back</button>
            <h2>Workout (${duration})</h2>
            <h3>Cool-Down</h3>
            ${cooldowns.map(c => `<p>${c}: 30s</p>`).join('')}
            <button id="nextBtn">Next</button>
        `;
        document.getElementById('nextBtn').addEventListener('click', () => {
            currentWorkoutState.movementIdx++;
            updateWorkoutDisplay();
        });
    } else { // Feedback page
        frame.innerHTML = `
            <button id="backToLandingBtn">Back</button>
            <h2>Workout (${duration})</h2>
            <h3>Workout Feedback</h3>
            ${sets.map(({ movement }) => `
                <div class="movement">
                    <p>${movement}</p>
                    <select id="feedback_${movement}">
                        <option value="Way Too Easy">Way Too Easy</option>
                        <option value="Too Easy">Too Easy</option>
                        <option value="Just Right" selected>Just Right</option>
                        <option value="Too Hard">Too Hard</option>
                        <option value="Way Too Hard">Way Too Hard</option>
                    </select>
                </div>
            `).join('')}
            <button id="completeWorkoutBtn">Workout Complete</button>
        `;
        document.getElementById('completeWorkoutBtn').addEventListener('click', () => completeWorkout(day));
    }

    document.getElementById('backToLandingBtn')?.addEventListener('click', showLandingPage);
}

function completeSet() {
    const { movementIdx, setIdx, sets } = currentWorkoutState;
    const actualWeightInput = document.getElementById('actualWeight').value;
    const [isValid, actualWeight] = actualWeightInput ? validateInput(actualWeightInput) : [true, null];
    
    if (!isValid) return alert(actualWeight);

    const movementSet = sets[movementIdx].sets[setIdx];
    const attachment = attachments[sets[movementIdx].movement];
    movementSet.actualWeight = actualWeight !== null ? 
        ((attachment === "Handles" || attachment === "Handle") ? actualWeight * 2 : actualWeight) : 
        movementSet.weight;

    if (setIdx + 1 < sets[movementIdx].sets.length) {
        currentWorkoutState.setIdx++;
    } else if (movementIdx + 1 < sets.length) {
        currentWorkoutState.movementIdx++;
        currentWorkoutState.setIdx = 0;
    } else {
        currentWorkoutState.movementIdx++;
    }
    updateWorkoutDisplay();
}

function completeWorkout(day) {
    console.log("Completing workout:", day);
    const days = Object.keys(workoutPlans[userOptions.daysPerWeek]);
    const currentDayIdx = days.indexOf(day);
    const nextDayIdx = (currentDayIdx + 1) % userOptions.daysPerWeek;

    const logEntry = {
        date: new Date().toISOString(),
        day,
        goal: userOptions.goal || "Build Muscle",
        duration: userOptions.duration,
        movements: {}
    };

    warmupsAndCooldowns(day).forEach(m => {
        logEntry.movements[m] = { recommendedWeight: 0, actualWeight: 0, feedback: "N/A", new1rm: 0 };
        movement1rmDict[m] = 0;
    });

    currentWorkoutState.sets.forEach(({ movement, sets: movementSets, feedback }) => {
        const feedbackValue = document.getElementById(`feedback_${movement}`).value;
        let max1rm = 0;
        movementSets.forEach(({ weight, reps, actualWeight }) => {
            const usedWeight = actualWeight || weight;
            const set1rm = calculate1rm(usedWeight, reps);
            max1rm = Math.max(max1rm, set1rm);
            logEntry.movements[movement] = { recommendedWeight: weight, actualWeight: usedWeight, reps, feedback: feedbackValue, new1rm: max1rm };
        });

        const current1rm = getMovement1rm(movement, true);
        const adjustment = { "Way Too Easy": 1.10, "Too Easy": 1.05, "Just Right": 1.0, "Too Hard": 0.95, "Way Too Hard": 0.90 };
        movement1rmDict[movement] = Math.max(max1rm, current1rm) * (adjustment[feedbackValue] || 1.0);
    });

    workoutLog.push(logEntry);
    localStorage.setItem('currentDay', nextDayIdx + 1);
    if (currentDayIdx === userOptions.daysPerWeek - 1) {
        workoutPlans[userOptions.daysPerWeek] = {};
        generateWeeklyPlan();
        localStorage.setItem('currentDay', '1');
    }
    saveUserData();
    welcomePage();
}
function warmupsAndCooldowns(day) {
    const focus = day.split(" - ")[1].split("/")[0].toLowerCase();
    const warmupOptions = {
        push: ["Push-Up", "Bench Dips"], chest: ["Push-Up", "Bench Dips"], shoulders: ["Arm Circles", "Pike Press"],
        pull: ["Superman Hold", "Scapular Push-Up"], back: ["Superman Hold", "Reverse Snow Angel"],
        legs: ["Bodyweight Squat", "Jump Squat"], core: ["Plank", "Mountain Climber"], arms: ["Narrow Push-Up", "Tricep Dip"],
        upper: ["Push-Up", "Superman Hold"], lower: ["Bodyweight Squat", "Jump Squat"]
    };
    const cooldownOptions = {
        push: ["Chest Opener", "Cat-Cow Stretch"], chest: ["Chest Opener", "Cat-Cow Stretch"], shoulders: ["Chest Opener", "Side Bend"],
        pull: ["Cat-Cow Stretch", "Hamstring Stretch"], back: ["Cat-Cow Stretch", "Hamstring Stretch"],
        legs: ["Hamstring Stretch", "Quad Stretch"], core: ["Cat-Cow Stretch", "Side Bend"], arms: ["Chest Opener", "Side Bend"],
        upper: ["Chest Opener", "Cat-Cow Stretch"], lower: ["Hamstring Stretch", "Quad Stretch"]
    };
    const warmups = warmupOptions[focus] || ["Push-Up", "Bodyweight Squat"];
    const cooldowns = cooldownOptions[focus] || ["Hamstring Stretch", "Chest Opener"];
    return [...warmups, ...cooldowns];
}

function generateWeeklyPlan() {
    console.log("Generating weekly plan");
    const daysPerWeek = userOptions.daysPerWeek;
    const duration = parseInt(userOptions.duration.split(' ')[0]);
    const movementsPerDay = { 20: 3, 30: 4, 45: 5, 60: 6 }[duration];
    const basePlans = {
        2: ["Upper Body", "Lower Body"],
        3: ["Push", "Pull", "Legs/Core"],
        4: ["Push", "Pull", "Legs", "Core/Upper"],
        5: ["Chest/Triceps", "Back/Biceps", "Legs", "Shoulders", "Core"],
        6: ["Chest", "Back", "Legs", "Shoulders", "Arms", "Core"]
    };
    const movementGroups = {
        "Push": ["Bench Press", "Overhead Press", "Incline Bench Press", "Standing Chest Press", "Incline Chest Press", "Decline Chest Press", "Shoulder Press", "Single-Arm Shoulder Press", "Clean and Press", "Squat to Press"],
        "Chest": ["Bench Press", "Incline Bench Press", "Decline Bench Press", "Standing Chest Press", "Incline Chest Press", "Decline Chest Press", "Single-Arm Chest Press", "Chest Squeeze", "Thruster"],
        "Shoulders": ["Overhead Press", "Military Press", "Seated Overhead Press", "Shoulder Press", "Single-Arm Shoulder Press", "Clean and Press", "Squat to Press"],
        "Pull": ["Lat Pulldown", "Wide Grip Lat Pulldown", "Close-Grip Lat Pulldown", "Bent-Over Row", "Seated Row", "Wide-Grip Row", "Reverse-Grip Row", "Deadlift to Row", "Burpee Pull"],
        "Back": ["Lat Pulldown", "Wide Grip Lat Pulldown", "Close-Grip Lat Pulldown", "Bent-Over Row", "Seated Row", "Pendlay Row", "Wide-Grip Row", "Reverse-Grip Row", "Single-Arm Row", "Deadlift to Row", "Burpee Pull"],
        "Legs": ["Front Squat", "Back Squat", "Deadlift", "Romanian Deadlift", "Sumo Deadlift", "Single-Leg Deadlift", "Stiff-Leg Deadlift", "Good Morning", "Hip Hinge", "Squat with Hip Pull", "Squat with Lateral Pull", "Hack Squat"],
        "Triceps": ["Tricep Pushdown", "Overhead Tricep Extension", "Close-Grip Bench Press", "Rope Pushdown", "Single-Arm Pushdown", "Single-Arm Overhead Extension", "Reverse-Grip Pushdown", "Lying Tricep Extension", "Cross-Body Tricep Extension"],
        "ChestAcc": ["Cable Chest Fly", "Dumbbell Fly", "Mid-Level Fly", "High Fly", "Low Fly", "Crossover", "Chest Pull"],
        "ShouldersAcc": ["Lateral Raise", "Front Raise", "Upright Row", "Shrug", "High Pull", "Internal Rotation", "External Rotation"],
        "Biceps": ["Bicep Curl", "Hammer Curl", "Concentration Curl", "Preacher Curl", "High Curl", "Reverse Curl", "Bayesian Curl", "Rope Curl", "Drag Curl", "Lunge to Curl"],
        "BackAcc": ["Straight-Arm Pulldown", "Face Pull", "Reverse Fly"],
        "LegsAcc": ["Goblet Squat", "Lunge", "Reverse Lunge", "Split Squat", "Step-Up", "Leg Press", "Single-Leg Press", "Knee Raise", "Pull-Through", "Straight-Leg Pull", "Reverse Pull", "Standing Leg Pull"],
        "Glutes": ["Hip Thrust", "Glute Bridge", "Hip Abduction Pull", "Hip Extension Pull", "Lateral Pull", "Standing Hip Pull", "Standing Adduction Pull", "Glute Pull", "Rotational Lunge"],
        "Core": ["Cable Crunch", "Woodchopper (High to Low)", "Woodchopper (Low to High)", "Pallof Press", "Hanging Leg Raise", "Russian Twist", "Ab Rollout", "Standing Crunch", "Kneeling Crunch", "Anti-Rotation Press", "Plank Row", "Oblique Twist", "Reverse Crunch", "Standing Twist", "Farmer’s Carry", "Core Rotation Press"],
        "Arms": ["Tricep Pushdown", "Bicep Curl", "Overhead Tricep Extension", "Hammer Curl", "Rope Pushdown", "High Curl", "Single-Arm Pushdown", "Reverse Curl"],
        "Upper": ["Bench Press", "Lat Pulldown", "Overhead Press", "Bicep Curl", "Standing Chest Press", "Single-Arm Pulldown", "Shoulder Press", "High Curl", "Tricep Pushdown"],
        "Lower": ["Front Squat", "Back Squat", "Deadlift", "Romanian Deadlift", "Hip Thrust", "Goblet Squat", "Lunge", "Leg Press", "Pull-Through"]
    };
    const bodyweightGroups = {
        "Push": ["Push-Up", "Wide Push-Up"], "Chest": ["Push-Up", "Incline Push-Up"], "Shoulders": ["Pike Press", "Handstand Hold Against Bench"],
        "Pull": ["Superman Hold", "Reverse Snow Angel"], "Back": ["Superman Hold", "Bench Reverse Fly"],
        "Legs": ["Bodyweight Squat", "Jump Squat"], "Triceps": ["Tricep Dip", "Diamond Push-Up"], "Biceps": ["Isometric Bicep Hold", "Doorway Curl"],
        "ChestAcc": ["Narrow Push-Up", "Chest Squeeze"], "ShouldersAcc": ["Arm Circles", "Shoulder Tap"], "BackAcc": ["Prone Y-Raise", "Prone T-Raise"],
        "LegsAcc": ["Wall Sit", "Single-Leg Squat to Bench"], "Glutes": ["Donkey Kick", "Fire Hydrant"], "Core": ["Plank", "Mountain Climber"],
        "Arms": ["Narrow Push-Up", "Bench Bicep Curl"], "Upper": ["Push-Up", "Superman Hold"], "Lower": ["Bodyweight Squat", "Jump Squat"]
    };

    const newPlan = {};

    basePlans[daysPerWeek].forEach((focus, i) => {
        const dayName = `Day ${i + 1} - ${focus}`;
        const focusAreas = focus.split("/");
        let compounds = [], accessories = [], cores = [];

        if (focusAreas.includes("Push")) {
            compounds = movementGroups["Push"];
            accessories = [...movementGroups["ChestAcc"], ...movementGroups["ShouldersAcc"], ...movementGroups["Triceps"]];
        } else if (focusAreas.includes("Chest")) {
            compounds = movementGroups["Chest"];
            accessories = focusAreas.includes("Triceps") ? movementGroups["Triceps"] : movementGroups["ChestAcc"];
        } else if (focusAreas.includes("Shoulders")) {
            compounds = movementGroups["Shoulders"];
            accessories = movementGroups["ShouldersAcc"];
        } else if (focusAreas.includes("Pull")) {
            compounds = movementGroups["Pull"];
            accessories = [...movementGroups["BackAcc"], ...movementGroups["Biceps"]];
        } else if (focusAreas.includes("Back")) {
            compounds = movementGroups["Back"];
            accessories = focusAreas.includes("Biceps") ? movementGroups["Biceps"] : movementGroups["BackAcc"];
        } else if (focusAreas.includes("Legs")) {
            compounds = movementGroups["Legs"];
            accessories = [...movementGroups["LegsAcc"], ...movementGroups["Glutes"]];
            cores = focusAreas.includes("Core") ? movementGroups["Core"] : [];
        } else if (focusAreas.includes("Arms")) {
            compounds = [];
            accessories = [...movementGroups["Biceps"], ...movementGroups["Triceps"]];
        } else if (focusAreas.includes("Upper")) {
            compounds = movementGroups["Upper"];
            accessories = [];
        } else if (focusAreas.includes("Lower")) {
            compounds = movementGroups["Lower"];
            accessories = movementGroups["LegsAcc"];
        } else if (focusAreas.includes("Core")) {
            compounds = [];
            cores = movementGroups["Core"];
        }

        let selected = [];
        if (userOptions.vacationMode) {
            const bwOptions = [...(bodyweightGroups[focusAreas[0]] || []), ...(bodyweightGroups[focusAreas[1]] || [])];
            shuffleArray(bwOptions);
            selected = bwOptions.slice(0, movementsPerDay).filter((m, idx, self) => self.indexOf(m) === idx);
        } else if (userOptions.bodyweight) {
            const bwCount = Math.min(2, Math.floor(Math.random() * 2) + 1);
            const bwOptions = bodyweightGroups[focusAreas[0]] || bodyweightGroups["Upper"];
            shuffleArray(bwOptions);
            const bwSelected = bwOptions.slice(0, bwCount);
            shuffleArray(compounds);
            shuffleArray(accessories);
            shuffleArray(cores);
            const cableCount = movementsPerDay - bwCount;
            selected = [...compounds.slice(0, Math.min(2, compounds.length)), ...accessories.slice(0, cableCount - 2 - (cores.length ? 1 : 0)), ...cores.slice(0, Math.min(1, cores.length)), ...bwSelected];
            selected = selected.filter((m, idx, self) => self.indexOf(m) === idx);
        } else {
            shuffleArray(compounds);
            shuffleArray(accessories);
            shuffleArray(cores);
            selected = [...compounds.slice(0, Math.min(2, compounds.length)), ...accessories.slice(0, movementsPerDay - 2 - (cores.length ? 1 : 0)), ...cores.slice(0, Math.min(1, cores.length))];
            selected = selected.filter((m, idx, self) => self.indexOf(m) === idx);
        }

        newPlan[dayName] = selected.slice(0, movementsPerDay);
    });

    workoutPlans[daysPerWeek] = newPlan;
}

function shuffleArray(array) {
    if (!Array.isArray(array)) return;
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getCurrentDay() {
    const days = Object.keys(workoutPlans[userOptions.daysPerWeek]);
    const current = parseInt(localStorage.getItem('currentDay') || '1');
    return days[current - 1] || days[0];
}

function optionsPage() {
    console.log("Entering optionsPage");
    const frame = document.getElementById('optionsFrame');
    frame.innerHTML = `
        <button id="backToWelcomeBtn">Back</button>
        <h2>Workout Options</h2>
        <label>Days per Week:</label>
        <select id="daysPerWeek">
            ${[2, 3, 4, 5, 6].map(d => `<option value="${d}" ${userOptions.daysPerWeek === d ? 'selected' : ''}>${d}</option>`).join('')}
        </select>
        <label>Workout Duration:</label>
        <select id="duration">
            ${["20 minutes", "30 minutes", "45 minutes", "60 minutes"].map(d => `<option value="${d}" ${userOptions.duration === d ? 'selected' : ''}>${d}</option>`).join('')}
        </select>
        <label><input type="checkbox" id="bodyweight" ${userOptions.bodyweight ? 'checked' : ''}> Include Bodyweight Movements</label>
        <label><input type="checkbox" id="fivePoundIncrements" ${userOptions.fivePoundIncrements ? 'checked' : ''}> Use 5-Pound Increments</label>
        <label><input type="checkbox" id="vacationMode" ${userOptions.vacationMode ? 'checked' : ''}> Vacation Mode (Bodyweight Only)</label>
        <h3>Personal Details</h3>
        <label>Gender (M/F):</label>
        <select id="gender">
            <option value="">Select</option>
            <option value="M" ${userOptions.gender === "M" ? 'selected' : ''}>M</option>
            <option value="F" ${userOptions.gender === "F" ? 'selected' : ''}>F</option>
        </select>
        <label>Height (inches):</label><input type="number" id="height" value="${userOptions.height}">
        <label>Weight (lbs):</label><input type="number" id="weight" value="${userOptions.weight}">
        <button id="saveOptionsBtn">Save Options</button>
    `;

    const backBtn = document.getElementById('backToWelcomeBtn');
    if (backBtn) backBtn.addEventListener('click', () => {
        console.log("Back to welcome from options");
        welcomePage();
    });
    else console.error("backToWelcomeBtn not found");
    document.getElementById('saveOptionsBtn').addEventListener('click', saveOptions);
    showFrame('optionsFrame');
}

function saveOptions() {
    console.log("Saving options");
    userOptions = {
        daysPerWeek: parseInt(document.getElementById('daysPerWeek').value),
        duration: document.getElementById('duration').value,
        bodyweight: document.getElementById('bodyweight').checked,
        fivePoundIncrements: document.getElementById('fivePoundIncrements').checked,
        vacationMode: document.getElementById('vacationMode').checked,
        gender: document.getElementById('gender').value,
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        goal: userOptions.goal
    };
    workoutPlans[userOptions.daysPerWeek] = {};
    generateWeeklyPlan();
    saveUserData();
    welcomePage();
}

function saveUserData() {
    console.log("Saving user data");
    localStorage.setItem('userData', JSON.stringify({
        weightsDict,
        movement1rmDict,
        goal: userOptions.goal,
        options: userOptions,
        workoutLog
    }));
}

function loadUserData() {
    console.log("Loading user data");
    try {
        const data = JSON.parse(localStorage.getItem('userData') || '{}');
        weightsDict = data.weightsDict || {};
        movement1rmDict = data.movement1rmDict || {};
        oneRmDict = Object.fromEntries(Object.entries(weightsDict).map(([k, v]) => [k, calculate1rm(v, 5)]));
        userOptions = data.options || userOptions;
        workoutLog = data.workoutLog || [];
        if (!Object.keys(weightsDict).length && userOptions.height && userOptions.weight && userOptions.gender) {
            const est1rms = estimateInitial1rm(parseFloat(userOptions.height), parseFloat(userOptions.weight), userOptions.gender);
            weightsDict = Object.fromEntries(Object.entries(est1rms).map(([k, v]) => [k, v / (1 + 5/30)]));
            oneRmDict = est1rms;
            movement1rmDict = Object.fromEntries(allMovements.concat(bodyweightMovements, stretches).map(m => [m, allMovements.includes(m) ? getMovement1rm(m, false) : 0]));
        }
    } catch (error) {
        console.error("Error loading user data:", error);
    }
}

function calculateProgressOverTime() {
    console.log("Calculating progress");
    const pushMovements = ["Bench Press", "Incline Bench Press", "Decline Bench Press", "Cable Chest Press", "Standing Chest Press", "Incline Chest Press", "Decline Chest Press", "Single-Arm Chest Press", "Thruster", "Overhead Press", "Military Press", "Seated Overhead Press", "Shoulder Press", "Single-Arm Shoulder Press", "Clean and Press", "Squat to Press", "Push-Up", "Wide Push-Up", "Narrow Push-Up", "Incline Push-Up", "Decline Push-Up", "Pike Push-Up", "Staggered Push-Up"];
    const pullMovements = ["Lat Pulldown", "Wide Grip Lat Pulldown", "Close-Grip Lat Pulldown", "Pull-Up", "Chin-Up", "Single-Arm Pulldown", "Bent-Over Row", "Seated Row", "Pendlay Row", "Wide-Grip Row", "Reverse-Grip Row", "Single-Arm Row", "Deadlift to Row", "Burpee Pull"];
    const legMovements = ["Front Squat", "Back Squat", "Deadlift", "Romanian Deadlift", "Sumo Deadlift", "Goblet Squat", "Lunge", "Reverse Lunge", "Split Squat", "Bodyweight Squat", "Single-Leg Deadlift", "Stiff-Leg Deadlift", "Good Morning", "Hip Hinge", "Squat with Hip Pull", "Squat with Lateral Pull", "Hack Squat", "Wall Sit", "Single-Leg Squat to Bench", "Jump Squat"];
    const coreMovements = ["Cable Crunch", "Woodchopper (High to Low)", "Woodchopper (Low to High)", "Pallof Press", "Hanging Leg Raise", "Russian Twist", "Ab Rollout", "Side Plank", "Leg Raise", "Standing Crunch", "Kneeling Crunch", "Side Bend", "Anti-Rotation Press", "Plank Row", "Oblique Twist", "Reverse Crunch", "Standing Twist", "Farmer’s Carry", "Core Rotation Press", "Plank", "Mountain Climber", "Bicycle Crunch", "Bench Sit-Up"];

    const progress = { Push: [], Pull: [], Legs: [], Core: [] };
    const lastValues = { Push: 0, Pull: 0, Legs: 0, Core: 0 };
    const dates = [];

    if (workoutLog.length) {
        workoutLog.forEach(entry => {
            dates.push(entry.date);
            const movements = entry.movements;

            const average1rm = (movementList) => {
                const valid1rms = Object.entries(movements).filter(([m, d]) => movementList.includes(m) && d.new1rm > 0).map(([, d]) => d.new1rm);
                return valid1rms.length ? valid1rms.reduce((a, b) => a + b) / valid1rms.length : null;
            };

            const pushAvg = average1rm(pushMovements);
            const pullAvg = average1rm(pullMovements);
            const legsAvg = average1rm(legMovements);
            const coreAvg = average1rm(coreMovements);

            progress.Push.push(pushAvg !== null ? pushAvg : lastValues.Push);
            progress.Pull.push(pullAvg !== null ? pullAvg : lastValues.Pull);
            progress.Legs.push(legsAvg !== null ? legsAvg : lastValues.Legs);
            progress.Core.push(coreAvg !== null ? coreAvg : lastValues.Core);

            if (pushAvg !== null) lastValues.Push = pushAvg;
            if (pullAvg !== null) lastValues.Pull = pullAvg;
            if (legsAvg !== null) lastValues.Legs = legsAvg;
            if (coreAvg !== null) lastValues.Core = coreAvg;
        });
    } else if (weightsDict) {
        dates.push("Initial");
        progress.Push.push(getMovement1rm("Bench Press", false));
        progress.Pull.push(getMovement1rm("Lat Pulldown", false));
        progress.Legs.push(getMovement1rm("Front Squat", false));
        progress.Core.push(getMovement1rm("Cable Crunch", false));
        lastValues.Push = progress.Push[0];
        lastValues.Pull = progress.Pull[0];
        lastValues.Legs = progress.Legs[0];
        lastValues.Core = progress.Core[0];
    }

    return [dates, progress];
}

function updateProgressGraph() {
    console.log("Updating progress graph");
    try {
        const canvas = document.getElementById('progressCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const [dates, progress] = calculateProgressOverTime();
        if (!dates.length) {
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.fillText("No workout data yet.", canvas.width / 2, canvas.height / 2);
            return;
        }

        const max1rm = Math.max(...Object.values(progress).flat().filter(v => v !== null), 100);
        const width = 380, height = 250, margin = 20, labelWidth = 60;
        const plotWidth = width - margin - labelWidth, plotHeight = height - 2 * margin;

        ctx.beginPath();
        ctx.strokeStyle = "#ffffff";
        ctx.moveTo(margin, height - margin);
        ctx.lineTo(width - labelWidth, height - margin);
        ctx.moveTo(margin, height - margin);
        ctx.lineTo(margin, margin);
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "right";
        ctx.fillText(max1rm.toFixed(0), margin - 5, margin + 5);
        ctx.fillText("0", margin - 5, height - margin + 5);

        ctx.textAlign = "center";
        ctx.fillText("Workouts Over Time", (margin + width - labelWidth) / 2, height - 5);

        const colors = { Push: "#4ECDC4", Pull: "#FF6B6B", Legs: "#96CEB4", Core: "#45B7D1" };
        Object.entries(progress).forEach(([type, values]) => {
            ctx.beginPath();
            ctx.strokeStyle = colors[type];
            values.forEach((val, i) => {
                const x = margin + (i / (dates.length - 1)) * plotWidth;
                const y = height - margin - (val / max1rm) * plotHeight;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.stroke();
        });

        let legendX = width - labelWidth + 10;
        let legendY = margin;
        ctx.textAlign = "left";
        Object.entries(colors).forEach(([type, color]) => {
            ctx.fillStyle = color;
            ctx.fillRect(legendX, legendY, 10, 10);
            ctx.fillStyle = "#ffffff";
            ctx.fillText(type, legendX + 15, legendY + 10);
            legendY += 20;
        });
    } catch (error) {
        console.error("Error in updateProgressGraph:", error);
    }
}

// Initialize
loadUserData();
welcomePage();