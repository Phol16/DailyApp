import { gamesRepository } from '../../database/gameRepositiory';
import { publisherRepsoitory } from '../../database/publisherRepository';
import { publisherServices } from '../../services/publisherServices';

import { IGameRepository, IPublisherRepository, IPublisherService } from '../types';

export class GamesFactory {
  protected static gameRepo(): IGameRepository {
    return new gamesRepository();
  }

  protected static publisherRepo(): IPublisherRepository {
    return new publisherRepsoitory();
  }

  public static publisherService(): IPublisherService {
    return new publisherServices(this.publisherRepo());
  }
}
