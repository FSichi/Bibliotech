import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark, a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const ShowCode = ({ code }) => {
    return (
        <div className='codeImg'>
            <SyntaxHighlighter language="bash" style={coldarkDark} customStyle={{ borderRadius: '5px', backgroundColor: '#182234' }}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
}

export const ShowCodeJavaScript = ({ code }) => {
    return (
        <div className="codeImg">
            <SyntaxHighlighter language="javascript" style={a11yDark} customStyle={{ borderRadius: '5px', backgroundColor: '#182234' }}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
}