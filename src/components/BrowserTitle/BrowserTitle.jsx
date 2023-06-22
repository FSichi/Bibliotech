import { Helmet } from 'react-helmet';

export const BrowserTitle = ({ titlePage }) => {
    return (
        <Helmet>
            <title>{titlePage} - bibliotech</title>
        </Helmet>
    )
}
