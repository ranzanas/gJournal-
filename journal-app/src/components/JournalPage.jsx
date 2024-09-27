import styles from "./JournalPage.module.css";
import { useState } from 'react'


const userData = {
    name: 'John Doe',
    points: 50,
  };
  
  const JournalPage = () => {
    const [entries, setEntries] = useState([]);
    const [journalEntry, setJournalEntry] = useState('');
    const currentDate = new Date().toLocaleDateString();
  
    const handleSaveEntry = () => {
      if (journalEntry.trim()) {
        setEntries([...entries, { entry: journalEntry, date: currentDate }]);
        setJournalEntry(''); // Clear the journal section after saving
      }
    };
  
    return (
      <div>
        {/* Motivational Quote */}
        <section className={styles.quoteSection}>
          <h2>"The journey of a thousand miles begins with one step." – Lao Tzu</h2>
        </section>
  
        <div className={styles.journalContainer}>
          {/* Aside panel showing entries */}
          <aside className={styles.entryAside}>
            <h3>Your Entries</h3>
            {entries.length === 0 ? (
              <p>No entries yet. Start journaling!</p>
            ) : (
              <ul>
                {entries.map((entry, index) => (
                  <li key={index}>
                    <p>{entry.date}</p>
                    <p>{entry.entry}</p>
                  </li>
                ))}
              </ul>
            )}
          </aside>
  
          {/* Journal writing section */}
          <section className={styles.journalSection}>
            <header className={styles.journalHeader}>
              <p>
                <strong>{userData.name}</strong> | Points: {userData.points} | Date: {currentDate}
              </p>
            </header>
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              placeholder="Write your journal entry here..."
              rows="10"
            ></textarea>
            <button onClick={handleSaveEntry}>Save Journal</button>
          </section>
        </div>
      </div>
    );
  };
  
  export default JournalPage;