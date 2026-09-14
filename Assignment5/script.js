// ==========================================
// CUTE BATTLE ARENA
// ==========================================


// ==========================================
// ELEMENTS
// ==========================================

const homeScreen =
    document.getElementById("homeScreen");

const gameScreen =
    document.getElementById("gameScreen");

const startBtn =
    document.getElementById("startBtn");

const thaiBtn =
    document.getElementById("thaiBtn");

const englishBtn =
    document.getElementById("englishBtn");

const homeDarkBtn =
    document.getElementById("homeDarkBtn");

const darkBtn =
    document.getElementById("darkBtn");

const soundBtn =
    document.getElementById("soundBtn");

const helpBtn =
    document.getElementById("helpBtn");

const attackBtn =
    document.getElementById("attackBtn");

const defendBtn =
    document.getElementById("defendBtn");

const restartBtn =
    document.getElementById("restartBtn");

const restartAllBtn =
    document.getElementById("restartAllBtn");

const player =
    document.getElementById("player");

const enemy =
    document.getElementById("enemy");

const enemyCharacter =
    document.getElementById("enemyCharacter");

const enemyName =
    document.getElementById("enemyName");

const enemyState =
    document.getElementById("enemyState");

const playerHpBar =
    document.getElementById("playerHp");

const enemyHpBar =
    document.getElementById("enemyHp");

const playerHpText =
    document.getElementById("playerHpText");

const enemyHpText =
    document.getElementById("enemyHpText");

const battleMessage =
    document.getElementById("battleMessage");

const turnStatus =
    document.getElementById("turnStatus");

const stageText =
    document.getElementById("stageText");

const attackEffect =
    document.getElementById("attackEffect");

const damagePopup =
    document.getElementById("damagePopup");

const resultBox =
    document.getElementById("resultBox");

const resultEmoji =
    document.getElementById("resultEmoji");

const resultTitle =
    document.getElementById("resultTitle");

const resultText =
    document.getElementById("resultText");


// ==========================================
// GAME VARIABLES
// ==========================================

const MAX_STAGE = 5;

let currentStage = 1;

let playerHp = 100;

let enemyHp = 100;

let enemyMaxHp = 100;

let playerTurn = true;

let defending = false;

let gameRunning = false;

let soundOn = true;

let language = "th";


// ==========================================
// STAGES
// ==========================================

const stages = {

    1: {
        nameTH: "นักสู้ฝึกหัด",
        nameEN: "Training Bot",
        character: "🤖",
        hp: 100,
        minDamage: 8,
        maxDamage: 15
    },

    2: {
        nameTH: "ปีศาจน้อย",
        nameEN: "Little Demon",
        character: "👹",
        hp: 120,
        minDamage: 10,
        maxDamage: 18
    },

    3: {
        nameTH: "ราชาเงา",
        nameEN: "Shadow King",
        character: "👺",
        hp: 145,
        minDamage: 12,
        maxDamage: 22
    },

    4: {
        nameTH: "จอมมาร",
        nameEN: "Demon Lord",
        character: "👿",
        hp: 170,
        minDamage: 15,
        maxDamage: 26
    },

    5: {
        nameTH: "มังกรสายรุ้ง",
        nameEN: "Rainbow Dragon",
        character: "🐉",
        hp: 200,
        minDamage: 18,
        maxDamage: 30
    }

};


// ==========================================
// LANGUAGE
// ==========================================

const text = {

    th: {

        title: "Cute Battle Arena",

        description:
            "เอาชนะศัตรูให้ครบทั้ง 5 ด่าน!",

        start:
            "▶️ เริ่มเกม",

        stage:
            "ด่าน",

        yourTurn:
            "🎮 ตาของคุณ — เลือก 1 การกระทำ",

        enemyTurn:
            "⏳ ศัตรูกำลังตัดสินใจ...",

        attack:
            "⚔️ โจมตี",

        defend:
            "🛡️ ป้องกัน",

        attackHint:
            "กด A",

        defendHint:
            "กด D",

        restart:
            "🔄 เริ่มใหม่ด่านนี้",

        restartAll:
            "🏠 เริ่มใหม่ทั้งหมด",

        soundOn:
            "🔊 เสียงเปิด",

        soundOff:
            "🔇 เสียงปิด",

        dark:
            "🌙 Dark Mode",

        light:
            "☀️ Light Mode",

        win:
            "🎉 ชนะด่าน!",

        lose:
            "💔 แพ้ด่าน",

        final:
            "👑 YOU WIN!",

        next:
            "กำลังเข้าสู่ด่านต่อไป...",

        defense:
            "🛡️ ศัตรูป้องกัน!",

        enemyAttack:
            "💥 ศัตรูโจมตี!",

        help:
            "🥊 วิธีเล่น\n\n" +
            "⚔️ โจมตี = สร้างความเสียหาย\n" +
            "🛡️ ป้องกัน = ลดความเสียหาย\n\n" +
            "🤖 ศัตรูสามารถโจมตีหรือป้องกันได้\n\n" +
            "ในแต่ละเทิร์นกดได้เพียง 1 ครั้ง\n\n" +
            "A = โจมตี\n" +
            "D = ป้องกัน\n\n" +
            "ชนะครบ 5 ด่านเพื่อเป็นแชมป์!"
    },


    en: {

        title: "Cute Battle Arena",

        description:
            "Defeat all enemies through 5 stages!",

        start:
            "▶️ START GAME",

        stage:
            "Stage",

        yourTurn:
            "🎮 Your turn — choose 1 action",

        enemyTurn:
            "⏳ Enemy is thinking...",

        attack:
            "⚔️ ATTACK",

        defend:
            "🛡️ DEFEND",

        attackHint:
            "Press A",

        defendHint:
            "Press D",

        restart:
            "🔄 Restart Stage",

        restartAll:
            "🏠 Restart All",

        soundOn:
            "🔊 Sound ON",

        soundOff:
            "🔇 Sound OFF",

        dark:
            "🌙 Dark Mode",

        light:
            "☀️ Light Mode",

        win:
            "🎉 STAGE CLEAR!",

        lose:
            "💔 STAGE LOST",

        final:
            "👑 YOU WIN!",

        next:
            "Moving to next stage...",

        defense:
            "🛡️ Enemy is defending!",

        enemyAttack:
            "💥 Enemy attacks!",

        help:
            "🥊 HOW TO PLAY\n\n" +
            "⚔️ ATTACK = Deal damage\n" +
            "🛡️ DEFEND = Reduce damage\n\n" +
            "🤖 Enemy can attack or defend\n\n" +
            "You can choose only 1 action per turn\n\n" +
            "A = ATTACK\n" +
            "D = DEFEND\n\n" +
            "Clear all 5 stages to become champion!"
    }

};


// ==========================================
// UPDATE LANGUAGE
// ==========================================

function updateLanguage() {

    const t = text[language];


    document.getElementById(
        "homeTitle"
    ).textContent = t.title;


    document.getElementById(
        "homeDescription"
    ).textContent = t.description;


    startBtn.textContent =
        t.start;


    attackBtn.firstChild.textContent =
        t.attack + " ";


    defendBtn.firstChild.textContent =
        t.defend + " ";


    document.getElementById(
        "attackHint"
    ).textContent =
        t.attackHint;


    document.getElementById(
        "defendHint"
    ).textContent =
        t.defendHint;


    restartBtn.textContent =
        t.restart;


    restartAllBtn.textContent =
        t.restartAll;


    soundBtn.textContent =
        soundOn
            ? t.soundOn
            : t.soundOff;


    updateDarkButton();

    updateStageText();

}


// ==========================================
// LANGUAGE BUTTONS
// ==========================================

thaiBtn.addEventListener(
    "click",
    () => {

        language = "th";

        updateLanguage();

        thaiBtn.classList.remove(
            "bg-slate-200"
        );

        thaiBtn.classList.add(
            "bg-pink-500",
            "text-white"
        );

        englishBtn.classList.remove(
            "bg-pink-500",
            "text-white"
        );

    }
);


englishBtn.addEventListener(
    "click",
    () => {

        language = "en";

        updateLanguage();

        englishBtn.classList.add(
            "bg-pink-500",
            "text-white"
        );

        thaiBtn.classList.remove(
            "bg-pink-500",
            "text-white"
        );

    }
);


// ==========================================
// START GAME
// ==========================================

startBtn.addEventListener(
    "click",
    () => {

        homeScreen.classList.add(
            "hidden"
        );

        gameScreen.classList.remove(
            "hidden"
        );

        startStage(1);

    }
);


// ==========================================
// START STAGE
// ==========================================

function startStage(stage) {

    currentStage = stage;

    const data =
        stages[currentStage];


    playerHp = 100;

    enemyMaxHp =
        data.hp;

    enemyHp =
        data.hp;


    playerTurn = true;

    defending = false;

    gameRunning = true;


    enemyCharacter.textContent =
        data.character;


    enemyName.textContent =
        language === "th"
            ? data.nameTH
            : data.nameEN;


    enemyState.textContent =
        currentStage === 5
            ? "FINAL BOSS"
            : "ENEMY";


    resultBox.classList.add(
        "hidden"
    );


    battleMessage.textContent =
        language === "th"
            ? `⚔️ ด่าน ${currentStage} เริ่ม!`
            : `⚔️ Stage ${currentStage} begins!`;


    turnStatus.textContent =
        text[language].yourTurn;


    attackBtn.disabled = false;

    defendBtn.disabled = false;


    updateStageText();

    updateHp();

}


// ==========================================
// STAGE TEXT
// ==========================================

function updateStageText() {

    stageText.textContent =
        `${text[language].stage} ${currentStage}/${MAX_STAGE}`;

}


// ==========================================
// UPDATE HP
// ==========================================

function updateHp() {

    playerHpBar.style.width =
        `${playerHp}%`;


    enemyHpBar.style.width =
        `${(enemyHp / enemyMaxHp) * 100}%`;


    playerHpText.textContent =
        `${playerHp} HP`;


    enemyHpText.textContent =
        `${enemyHp} HP`;

}


// ==========================================
// RANDOM DAMAGE
// ==========================================

function randomDamage(min, max) {

    return Math.floor(
        Math.random() *
        (max - min + 1)
    ) + min;

}


// ==========================================
// SHOW ATTACK EFFECT
// ==========================================

function showAttackEffect() {

    attackEffect.classList.remove(
        "hidden"
    );

    setTimeout(() => {

        attackEffect.classList.add(
            "hidden"
        );

    }, 500);

}


// ==========================================
// SHOW DAMAGE
// ==========================================

function showDamage(number) {

    damagePopup.textContent =
        `-${number}`;

    damagePopup.classList.remove(
        "hidden"
    );

    damagePopup.classList.remove(
        "damage-number"
    );

    void damagePopup.offsetWidth;

    damagePopup.classList.add(
        "damage-number"
    );


    setTimeout(() => {

        damagePopup.classList.add(
            "hidden"
        );

    }, 900);

}


// ==========================================
// PLAYER ATTACK
// ==========================================

function attack() {

    // สำคัญ:
    // ถ้าไม่ใช่ตาของเรา ห้ามกด

    if (!gameRunning) return;

    if (!playerTurn) return;


    // ใช้สิทธิ์ของเทิร์นทันที

    playerTurn = false;

    disableButtons();


    let damage =
        randomDamage(15, 25);


    // ศัตรูอาจป้องกัน

    const enemyDefending =
        Math.random() < 0.35;


    if (enemyDefending) {

        damage =
            Math.floor(
                damage * 0.4
            );


        battleMessage.textContent =
            text[language].defense;

        enemyState.textContent =
            "🛡️ DEFENDING";

    } else {

        enemyState.textContent =
            "ENEMY";

    }


    enemyHp -= damage;


    if (enemyHp < 0) {

        enemyHp = 0;

    }


    // Player animation

    player.classList.add(
        "player-attack"
    );


    enemy.classList.add(
        "character-hit"
    );


    showAttackEffect();

    showDamage(damage);

    playSound("attack");

    updateHp();


    setTimeout(() => {

        player.classList.remove(
            "player-attack"
        );

        enemy.classList.remove(
            "character-hit"
        );

    }, 500);


    // Enemy defeated

    if (enemyHp <= 0) {

        stageWon();

        return;

    }


    // Enemy counter attack

    setTimeout(
        enemyAttack,
        900
    );

}


// ==========================================
// PLAYER DEFEND
// ==========================================

function defend() {

    if (!gameRunning) return;

    if (!playerTurn) return;


    playerTurn = false;

    disableButtons();


    defending = true;


    player.classList.add(
        "pulse-soft"
    );


    battleMessage.textContent =
        language === "th"
            ? "🛡️ คุณกำลังป้องกัน!"
            : "🛡️ You are defending!";


    turnStatus.textContent =
        text[language].enemyTurn;


    setTimeout(
        enemyAttack,
        800
    );

}


// ==========================================
// ENEMY TURN
// ==========================================

function enemyAttack() {

    if (!gameRunning) return;


    const data =
        stages[currentStage];


    // ศัตรูเลือกเอง

    const enemyWillDefend =
        Math.random() < 0.30;


    // Enemy Defense

    if (enemyWillDefend) {

        enemyState.textContent =
            "🛡️ DEFENDING";


        battleMessage.textContent =
            language === "th"
                ? "🛡️ ศัตรูตั้งการ์ด!"
                : "🛡️ Enemy is defending!";


        defending = false;


        setTimeout(() => {

            playerTurn = true;

            enableButtons();

            enemyState.textContent =
                "ENEMY";

            turnStatus.textContent =
                text[language].yourTurn;

        }, 700);


        return;

    }


    // Enemy Attack

    let damage =
        randomDamage(
            data.minDamage,
            data.maxDamage
        );


    // Player defending

    if (defending) {

        damage =
            Math.floor(
                damage * 0.5
            );

    }


    playerHp -= damage;


    if (playerHp < 0) {

        playerHp = 0;

    }


    enemy.classList.add(
        "enemy-attack"
    );


    player.classList.add(
        "character-hit"
    );


    showAttackEffect();

    showDamage(damage);

    playSound("hit");

    updateHp();


    battleMessage.textContent =
        text[language].enemyAttack;


    defending = false;


    player.classList.remove(
        "pulse-soft"
    );


    setTimeout(() => {

        enemy.classList.remove(
            "enemy-attack"
        );

        player.classList.remove(
            "character-hit"
        );

    }, 500);


    // Player lost

    if (playerHp <= 0) {

        playerLose();

        return;

    }


    // Player turn again

    setTimeout(() => {

        playerTurn = true;

        enableButtons();

        turnStatus.textContent =
            text[language].yourTurn;

        battleMessage.textContent =
            language === "th"
                ? "✨ ตาของคุณ!"
                : "✨ Your turn!";

    }, 600);

}


// ==========================================
// DISABLE BUTTONS
// ==========================================

function disableButtons() {

    attackBtn.disabled = true;

    defendBtn.disabled = true;

}


// ==========================================
// ENABLE BUTTONS
// ==========================================

function enableButtons() {

    if (!gameRunning) return;

    attackBtn.disabled = false;

    defendBtn.disabled = false;

}


// ==========================================
// STAGE WON
// ==========================================

function stageWon() {

    gameRunning = false;

    playerTurn = false;

    disableButtons();


    if (
        currentStage === MAX_STAGE
    ) {

        battleMessage.textContent =
            text[language].final;


        resultEmoji.textContent =
            "👑🏆🎉";


        resultTitle.textContent =
            text[language].final;


        resultText.textContent =
            language === "th"
                ? "คุณเอาชนะครบทั้ง 5 ด่านแล้ว!"
                : "You cleared all 5 stages!";


        resultBox.classList.remove(
            "hidden"
        );


        playSound("win");

        return;

    }


    battleMessage.textContent =
        text[language].win;


    resultEmoji.textContent =
        "🎉✨";


    resultTitle.textContent =
        language === "th"
            ? `ผ่านด่าน ${currentStage}!`
            : `Stage ${currentStage} Clear!`;


    resultText.textContent =
        text[language].next;


    resultBox.classList.remove(
        "hidden"
    );


    playSound("win");


    // AUTO NEXT STAGE

    setTimeout(() => {

        resultBox.classList.add(
            "hidden"
        );

        startStage(
            currentStage + 1
        );

    }, 2000);

}


// ==========================================
// PLAYER LOSE
// ==========================================

function playerLose() {

    gameRunning = false;

    playerTurn = false;

    disableButtons();


    battleMessage.textContent =
        text[language].lose;


    resultEmoji.textContent =
        "💔😢";


    resultTitle.textContent =
        language === "th"
            ? `แพ้ด่าน ${currentStage}`
            : `Stage ${currentStage} Lost`;


    resultText.textContent =
        language === "th"
            ? "กดเริ่มใหม่ด่านนี้เพื่อแก้ตัว!"
            : "Restart this stage and try again!";


    resultBox.classList.remove(
        "hidden"
    );

}


// ==========================================
// RESTART CURRENT STAGE
// ==========================================

restartBtn.addEventListener(
    "click",
    () => {

        startStage(
            currentStage
        );

    }
);


// ==========================================
// RESTART ALL
// ==========================================

restartAllBtn.addEventListener(
    "click",
    () => {

        gameScreen.classList.add(
            "hidden"
        );

        homeScreen.classList.remove(
            "hidden"
        );

        currentStage = 1;

        updateStageText();

    }
);


// ==========================================
// BUTTONS
// ==========================================

attackBtn.addEventListener(
    "click",
    attack
);

defendBtn.addEventListener(
    "click",
    defend
);


// ==========================================
// KEYBOARD A / D
// ==========================================

document.addEventListener(
    "keydown",
    (event) => {

        const key =
            event.key.toLowerCase();


        if (key === "a") {

            attack();

        }


        if (key === "d") {

            defend();

        }

    }
);


// ==========================================
// DARK MODE
// ==========================================

function updateDarkButton() {

    const isDark =
        document.documentElement
            .classList
            .contains("dark");


    const t =
        text[language];


    darkBtn.textContent =
        isDark
            ? t.light
            : t.dark;


    homeDarkBtn.textContent =
        isDark
            ? t.light
            : t.dark;

}


function toggleDarkMode() {

    document.documentElement
        .classList
        .toggle("dark");


    updateDarkButton();

}


darkBtn.addEventListener(
    "click",
    toggleDarkMode
);


homeDarkBtn.addEventListener(
    "click",
    toggleDarkMode
);


// ==========================================
// SOUND
// ==========================================

soundBtn.addEventListener(
    "click",
    () => {

        soundOn = !soundOn;

        updateLanguage();

    }
);


function playSound(type) {

    if (!soundOn) return;


    try {

        const audio =
            new AudioContext();

        const oscillator =
            audio.createOscillator();

        const gain =
            audio.createGain();


        oscillator.connect(gain);

        gain.connect(
            audio.destination
        );


        if (type === "attack") {

            oscillator.frequency.value =
                180;

        }

        else if (type === "hit") {

            oscillator.frequency.value =
                100;

        }

        else {

            oscillator.frequency.value =
                600;

        }


        oscillator.start();


        gain.gain.exponentialRampToValueAtTime(
            0.01,
            audio.currentTime + 0.2
        );


        oscillator.stop(
            audio.currentTime + 0.2
        );

    }

    catch (error) {

        console.log(
            "Audio unavailable"
        );

    }

}


// ==========================================
// HELP
// ==========================================

helpBtn.addEventListener(
    "click",
    () => {

        alert(
            text[language].help
        );

    }
);


// ==========================================
// INITIAL
// ==========================================

updateLanguage();