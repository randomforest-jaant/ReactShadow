declare module 'react-shadow/styled-components' {
    import * as React from 'react';
    
    interface IProps {
        mode?: 'open' | 'closed';
        delegatesFocus?: boolean;
        styleSheets?: CSSStyleSheet[];
        ssr?: boolean;
        children?: React.ReactNode;
    }
    
    type Root<K extends keyof JSX.IntrinsicElements> = {
        [K in keyof JSX.IntrinsicElements]: React.ComponentPropsWithRef<K & IProps>;
    };
    
    
    const ReactShadowRoot: Root<any>;
    
    export default ReactShadowRoot;
}
