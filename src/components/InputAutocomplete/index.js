/* eslint-disable no-use-before-define */
import React, { useRef, useEffect, useState } from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import NoSsr from '@material-ui/core/NoSsr';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
  color: #09292f;
`;

const InputWrapper = styled('div')`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.25);
  background-color: #c7e3ea;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;

  &:hover:not(.disabled) {
    border-color: rgba(0, 0, 0, 0.87);
  }

  &.focused:not(.disabled) {
    border-color: rgba(0, 0, 0, 0.87);
    border-width: 2px;
  }

  &.disabled {
    background-color: rgba(50, 50, 50, 0.1) !important;
  }

  & #customized-hook-demo {
    background-color: initial !important;
    font-size: 14px;
    height: 36px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`;

const Tag = styled(({ label, onDelete, ...props }) => (
  <div {...props}>
    <span>{label}</span>
    <CloseIcon onClick={onDelete} />
  </div>
))`
  display: flex;
  align-items: center;
  margin: 2px;
  line-height: 22px;
  background-color: #f0f0f0;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;
  &.disabled {
    background-color: rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }
  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }
  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  & svg {
    font-size: 18px;
    cursor: pointer;
    padding: 4px;
  }
`;

const Listbox = styled('ul')`
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
  & li {
    padding: 5px 12px;
    display: flex;
    & span {
      flex-grow: 1;
    }
    & svg {
      color: transparent;
    }
  }
  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;
    & svg {
      color: #1890ff;
    }
  }
  & li[data-focus='true'] {
    background-color: #e6f7ff;
    cursor: pointer;
    & svg {
      color: #000;
    }
  }
`;

export default function InputAutocomplete(props) {
  const ref = useRef(null);
  const [inputWidth, setInputWidth] = useState('auto');

  useEffect(() => {
    setInputWidth(ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);

  const { data, defaultValue, isDisabled } = props;
  const importantValue = props.value;

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue,
    multiple: true,
    options: data,
    getOptionLabel: (option) => option[importantValue],
  });

  const dispatch = useDispatch();
  dispatch(props.dispatchAction(value));

  return (
    <NoSsr>
      <div style={{ marginTop: '-16px' }}>
        <div {...getRootProps()}>
          <Label {...getInputLabelProps()}>{props.label}</Label>
          <InputWrapper
            ref={(setAnchorEl, ref)}
            className={`${focused ? 'focused' : ''} ${
              isDisabled ? 'disabled' : ''
            }`}
          >
            {value.map((option, index) => (
              <Tag
                label={option[importantValue]}
                className={`${isDisabled ? 'disabled' : ''}`}
                {...getTagProps({ index })}
              />
            ))}

            <input disabled={isDisabled} {...getInputProps()} />
          </InputWrapper>
        </div>
        {groupedOptions.length > 0 ? (
          <Listbox
            style={{ zIndex: 2, width: inputWidth }}
            {...getListboxProps()}
          >
            {groupedOptions.map((option, index) => (
              <li {...getOptionProps({ option, index })}>
                <span>{option[importantValue]}</span>
                <CheckIcon fontSize="small" />
              </li>
            ))}
          </Listbox>
        ) : null}
      </div>
    </NoSsr>
  );
}
