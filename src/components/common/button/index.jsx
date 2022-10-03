import React from 'react';
import { Button } from '@chakra-ui/react';

const EnvitedButton = ({ variant, ...props }) => {
  return (
    <div>
      <Button variant={variant || 'primary'} {...props}>
        🎉 Create my event
      </Button>
    </div>
  );
};

export default EnvitedButton;
