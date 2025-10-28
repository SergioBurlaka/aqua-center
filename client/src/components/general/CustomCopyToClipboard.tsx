import React, { useState } from 'react';

import { CheckCircleOutlined, CopyOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CustomCopyToClipboard: React.FC<{ text: string | number }> = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const onCopyText = () => {
    setCopySuccess(true);

    setTimeout(() => {
      setCopySuccess(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={String(text)} onCopy={onCopyText}>
      {copySuccess ? (
        <Button size="large" type="link" icon={<CheckCircleOutlined />} />
      ) : (
        <Tooltip title="Copy to clipboard">
          <Button size="large" type="link" icon={<CopyOutlined />} />
        </Tooltip>
      )}
    </CopyToClipboard>
  );
};

export default CustomCopyToClipboard;
