import React, { useEffect } from 'react';

const navLinks = [
  { id: 0, name: 'Home', link: '!#' },
  { id: 1, name: 'Courses', link: '!#' },
  { id: 2, name: 'Resources', link: '!#' },
  { id: 3, name: 'About Us', link: '!#' },
  { id: 4, name: 'Contact', link: '!#' },
];

const Header = ({ logo }) => {
  const fetchAllUsers = (signal) => {
    fetch('https://jsonplaceholder.typicode.com/users', { signal: signal })
      .then((response) => response.text())
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchAllUsers(signal);

    return () => {
      //cleanup
      controller.abort();
    };
  }, []);

  return (
    <header>
      <section className='logo'>
        <h3>{logo}</h3>
      </section>
      <nav>
        <ul>
          {navLinks.map(({ id, link, name }) => (
            <li key={id}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
