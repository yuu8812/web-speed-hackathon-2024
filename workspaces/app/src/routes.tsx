import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

import { SvgIcon } from './features/icons/components/SvgIcon';
import { Link } from './foundation/components/Link';
import { Text } from './foundation/components/Text';
import { ActionLayout } from './foundation/layouts/ActionLayout';
import { Color, Space, Typography } from './foundation/styles/variables';
import { TopPage } from './pages/TopPage';

const BookDetailPage = React.lazy(() => import('./pages/BookDetailPage'));
const EpisodeDetailPage = React.lazy(() => import('./pages/EpisodeDetailPage'));
const AuthorDetailPage = React.lazy(() => import('./pages/AuthorDetailPage'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const CommonLayout = React.lazy(() => import('./foundation/layouts/CommonLayout'));

const _BackToTopButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${Space * 1}px;
  border: none;
  background-color: transparent;
`;

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <Suspense fallback={<></>}>
            <CommonLayout />
          </Suspense>
        }
        path={'/'}
      >
        <Route
          element={
            <Suspense fallback={<></>}>
              <TopPage />
            </Suspense>
          }
          path={''}
        />
      </Route>
      <Route
        element={
          <ActionLayout
            leftContent={
              <_BackToTopButton href={'/'}>
                <SvgIcon color={Color.MONO_100} height={32} type="ArrowBack" width={32} />
                <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
                  トップへ戻る
                </Text>
              </_BackToTopButton>
            }
          />
        }
        path={'/'}
      >
        <Route
          element={
            <Suspense fallback={<></>}>
              <BookDetailPage />
            </Suspense>
          }
          path={'books/:bookId'}
        />
        <Route
          element={
            <Suspense fallback={<></>}>
              <EpisodeDetailPage />
            </Suspense>
          }
          path={'books/:bookId/episodes/:episodeId'}
        />
        <Route
          element={
            <Suspense fallback={<></>}>
              <AuthorDetailPage />
            </Suspense>
          }
          path={'authors/:authorId'}
        />
        <Route
          element={
            <Suspense fallback={<></>}>
              <SearchPage />
            </Suspense>
          }
          path={'search'}
        />
      </Route>
    </Routes>
  );
};
