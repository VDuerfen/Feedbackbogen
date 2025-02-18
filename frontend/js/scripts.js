document.getElementById('studentFeedbackForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const studentName = document.getElementById('studentName').value;
    const feedback = document.getElementById('feedback').value;

    const response = await fetch('/api/feedback/student', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ studentName, feedback })
    });

    if (response.ok) {
        alert('Feedback erfolgreich gesendet!');
        document.getElementById('studentFeedbackForm').reset();
    } else {
        alert('Fehler beim Senden des Feedbacks.');
    }
});

document.getElementById('teacherFeedbackForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const teacherName = document.getElementById('teacherName').value;
    const feedback = document.getElementById('feedback').value;

    const response = await fetch('/api/feedback/teacher', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ teacherName, feedback })
    });

    if (response.ok) {
        alert('Feedback erfolgreich gesendet!');
        document.getElementById('teacherFeedbackForm').reset();
    } else {
        alert('Fehler beim Senden des Feedbacks.');
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    if (document.getElementById('results')) {
        const response = await fetch('/api/feedback/results');
        const results = await response.json();
        document.getElementById('results').innerText = JSON.stringify(results, null, 2);
    }
});