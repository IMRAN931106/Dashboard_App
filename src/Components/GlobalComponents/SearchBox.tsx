import React, { useState } from "react";
import styles from "./SearchBox.module.css";

interface SearchBoxProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  borderRadius: string;
  backgroundColor: string;
  paddingProps: string;
  widthProps: string;
  heightProps: string;
  border?: string;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  searchTerm,
  onSearchChange,
  placeholder,
  borderRadius,
  backgroundColor,
  paddingProps,
  widthProps,
  heightProps,
  border,
  setIsFocused,
}) => {
  const inputStyles: React.CSSProperties = {
    // borderRadius: '21px',
    borderRadius: borderRadius,
    padding: paddingProps,
    width: widthProps,
    height: heightProps,
    boxSizing: "border-box",
    background: backgroundColor,
    outline: "none",
    border: border,
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={searchTerm}
      onChange={onSearchChange}
      style={inputStyles}
      className={styles.search_box}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default SearchBox;
