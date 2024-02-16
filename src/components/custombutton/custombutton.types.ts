// Path: components/custombutton/custombutton.d.ts

import * as React from 'react';

export interface CustomButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

