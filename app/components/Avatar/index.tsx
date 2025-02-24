import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import { bottts } from '@dicebear/collection';
import { Avatar as MuiAvatar } from '@mui/material';

interface IAvatar {
  name: string;
}

const Avatar = ({ name }: IAvatar) => {
  const avatar = useMemo(() => {
    const avatarConfig = {
      seed: name
    };

    return createAvatar(bottts, avatarConfig).toDataUri();
  }, [name]);

  return <MuiAvatar alt="Avatar" src={avatar} variant="square" />;
}

export default Avatar;