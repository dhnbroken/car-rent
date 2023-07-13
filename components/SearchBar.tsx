'use client';
import React, { useState } from 'react';
import { SearchManufacturer } from './';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses?: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src={'/magnifying-glass.svg'} alt="magnifying glass" width={40} height={40} className="object-contain" />
  </button>
);

interface Props {
  setManufacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}

const SearchBar = ({ setManufacturer, setModel }: Props) => {
  const [searchmanufacturer, setSearchManufacturer] = useState('');
  const [searchModel, setSearchModel] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchmanufacturer === '' && searchModel === '') {
      return alert('Please fill in the search bar');
    }

    setManufacturer(searchmanufacturer);
    setModel(searchModel);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer selected={searchmanufacturer} setSelected={setSearchManufacturer} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image src={'/model-icon.png'} alt="car model" width={25} height={25} className="absolute w-5 h-5 ml-4" />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
