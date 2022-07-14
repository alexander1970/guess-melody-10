import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import ArtistQuestionScreen from '../../pages/artist-question-screen/artist-question-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import GameOverScreen from '../../pages/game-over-screen/game-over-screen';
import GenreQuestionScreen from '../../pages/genre-question-screen/genre-question-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import WinScreen from '../../pages/win-screen/win-screen';
import { QuestionGenre, Questions } from '../../types/question';

type AppScreenProps = {
  errorsCount: number;
  questions: Questions;
}

function App({errorsCount, questions}: AppScreenProps): JSX.Element {
  const [firstQuestion] = questions;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<WelcomeScreen errorsCount={errorsCount} />}
        />
        <Route
          path={AppRoute.DevArtist}
          element={<ArtistQuestionScreen />}
        />
        <Route
          path={AppRoute.DevGenre}
          element={
            <GenreQuestionScreen
              question={firstQuestion as QuestionGenre}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<AuthScreen />}
        />
        <Route
          path={AppRoute.Result}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <WinScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Lose}
          element={<GameOverScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
