import { Movie } from "../reducers/movies";
import { connect } from "react-redux";
import { RootState } from "../store";
import { MovieCard } from "../components/MovieCard/MovieCard";

import styles from "./MoviesPage.module.scss";

interface MoviesProps {
  movies: Movie[];
}

export function MoviesPage({ movies }: MoviesProps) {
  return (
    <section>
      <div className={styles.list}>
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            id={m.id}
            title={m.title}
            popularity={m.popularity}
            overview={m.overview}
          />
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
});

const connector = connect(mapStateToProps);

export default connector(MoviesPage);
