import { gamesRepository } from '../../database/gameRepositiory';

import { IGameRepository } from '../types';

export class GamesFactory {
  protected static gameRepo(): IGameRepository {
    return new gamesRepository();
  }
}
