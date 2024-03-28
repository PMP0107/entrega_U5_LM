document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            question: "¿Cuál es el planeta más cercano al Sol?",
            answers: ["Venus", "Mercurio", "Tierra"],
            correctAnswer: "B"
        },
        {
            question: "¿Qué tipo de animal es una ballena?",
            answers: ["Pez", "Anfibio", "Mamífero"],
            correctAnswer: "C"
        },
        {
            question: "¿Qué elemento químico le da su color verde a las plantas?",
            answers: ["Clorofila", "Oxígeno", "Carbono"],
            correctAnswer: "A"
        },
        {
            question: "¿Cuál es la fórmula química del agua?",
            answers: ["CO2", "H2O", "O2"],
            correctAnswer: "B"
        },
        {
            question: "¿Cuántos huesos tiene el cuerpo humano adulto?",
            answers: ["305", "250", "206"],
            correctAnswer: "C"
        },
        {
            question: "¿Qué célula del cuerpo es responsable de transportar oxígeno?",
            answers: ["Glóbulo Rojo", "Glóbulo Blanco", "Plaqueta"],
            correctAnswer: "A"
        },
        {
            question: "¿Cuál es la velocidad de la luz?",
            answers: ["150.000 km/s", "300.000 km/s", "200.000 km/s"],
            correctAnswer: "B"
        },
        {
            question: "¿Cuál es el elemento más abundante en el universo??",
            answers: ["Oxígeno", "Carbono", "Hidrógeno"],
            correctAnswer: "C"
        },
        {
            question: "¿Cuál es la capa más externa de la Tierra?",
            answers: ["Corteza", "Litosfero", "Manto"],
            correctAnswer: "A"
        },
        {
            question: "¿Qué planetas son conocidos como los gigantes gaseosos?",
            answers: ["Mercurio y Venus", "Júpiter y Saturno", "Urano y Neptuno"],
            correctAnswer: "B"
        },
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    
    const updateQuestionAndAnswers = () => {
        const { question, answers } = questions[currentQuestionIndex];
        document.querySelector('.question-title h2').textContent = question;
        const answerButtons = document.querySelectorAll('.answer');
        
        answers.forEach((answer, index) => {
            const button = answerButtons[index];
            button.querySelector('.answer-text').textContent = answer;
            button.setAttribute('data-answer', String.fromCharCode(65 + index));
        });

        document.querySelector('.header-counter h2').textContent = `${currentQuestionIndex + 1}/${questions.length}`;
    };

    document.querySelectorAll('.answer').forEach(button => {
        button.addEventListener('click', function() {
            const userAnswer = this.getAttribute('data-answer');
            const correctAnswer = questions[currentQuestionIndex].correctAnswer;
            if (userAnswer === correctAnswer) {
                score++;
            }
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                updateQuestionAndAnswers();
            } else {
                alert(`Has completado el cuestionario. Tu puntaje es ${score}/${questions.length}.`);
                // Aquí también podrías redirigir al usuario a otra página o mostrar los resultados de otra manera
            }
        });
    });

    updateQuestionAndAnswers();
});