import React from 'react';
import useInputForm from '../../utils/InputForm';
import { ContextConsumer } from '../../utils/Context';

function FormContact() {
  const [email, setEmail] = useInputForm('');
  const [message, setMessage] = useInputForm('');

  const eventFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContextConsumer>
      {(toggleThemeContext) => {
        const { theme } = toggleThemeContext;
        return (
          <form action="" method="post" className={theme === 'light' ? '' : 'dark-mode'} onSubmit={eventFormSubmit}>
            <div className="username">
              <input type="email" name="username" id="username" placeholder="user@example.com" value={email} onChange={setEmail} />
            </div>
            <div className="message">
              <textarea name="message" id="message" rows="5" placeholder="hi there..." value={message} onChange={setMessage}></textarea>
            </div>
            <button type="submit" id="btnSubmit">
              send
            </button>
          </form>
        );
      }}
    </ContextConsumer>
  );
}

export default FormContact;
