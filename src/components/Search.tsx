import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { setAlert } from '../store/actions/alertActions';
import { getWeather, setLoading } from '../store/actions/weatherActions';

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === '') {
      return dispatch(setAlert('City is required!'));
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity('');
  }

  return (
    <>
      <div className="hero is-light has-text-centered" style={{ backgroundImage:'linear-gradient(to right bottom, #5511ac, #482cb7, #393dc1, #264cca, #0059d1)' }}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title text-light">{title}</h1>
            <form className="py-5" onSubmit={submitHandler}>
              <input
                type="text"
                className="input has-text-centered mb-2"
                placeholder="Enter city name"
                style={{ maxWidth: 300 }}
                value={city}
                onChange={changeHandler}
              />
              <button className="button is-success is-fullwidth" style={{ maxWidth: 300, margin: '0 auto' }}>Search</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;