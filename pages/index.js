import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import Eventos from '../components/Eventos';

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
                <Precio
                    precio={props.precioBitcoin}
                />
            </div>

            <div className="col-md-8">
                <h2 className="my-3">Noticias sobre Bitcoin</h2>
                <Noticias
                    noticias={props.noticiasBitcoin}
                />
            </div>

            <div className="col-md-4">
                <h2 className="my-3">Proximos eventos Bitcoin</h2>
                <Eventos
                    eventos={props.eventosBitcoin.events}
                />
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () =>
{
    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    const noticias = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-16&sortBy=publishedAt&apiKey=eac739bc3caa4494911561a5abde188b&language=es');
    const eventos = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=CLVXCUU2SOKL6AK5MZR7');

    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();
    const resEventos = await eventos.json();

    return {
        precioBitcoin: resPrecio.data.quotes.USD,
        noticiasBitcoin: resNoticias.articles,
        eventosBitcoin: resEventos
    }
}

export default Index;