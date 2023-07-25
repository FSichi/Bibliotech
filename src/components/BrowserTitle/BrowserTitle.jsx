import { Helmet } from 'react-helmet';

export const BrowserTitle = ({ titlePage }) => {
    return (
        <Helmet>
            <title>{titlePage} - Bibliotech</title>
        </Helmet>
    )
}
