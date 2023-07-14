import {
  IGameRepository,
  IGameServices,
  IGamesInformation,
  IResult,
} from '../utils/types';

export class gameServices implements IGameServices {
  constructor(private _gameRepository: IGameRepository) {}

  public async fetchAllGamesService(): Promise<IResult> {
    try {
      const result = await this._gameRepository.getAllGames();

      return {
        status: result.status,
        message: result.message,
      };
    } catch (error) {
      console.log('fetchallGames Service Services:', error);
      return {
        status: 500,
        message: 'Somethign went wrong',
      };
    }
  }

  public async fetchUserGameService(id: number): Promise<IResult> {
    try {
      if (!id) {
        return {
          status: 404,
          message: 'Missing Id',
        };
      }

      const result = await this._gameRepository.findGameById(id);

      return {
        status: result.status,
        message: result.message,
      };
    } catch (error) {
      console.log('fetchUserGameService Services:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  public async createGameServices(values: IGamesInformation): Promise<IResult> {
    try {
      if (!values || Object.keys(values).length === 0) {
        return {
          status: 404,
          message: 'Missing Details',
        };
      }

      const result = await this._gameRepository.createGameRepository(values);

      return {
        status: result.status,
        message: result.message,
      };
    } catch (error) {
      console.log('createGameService Service:', error);
      return {
        status: 500,
        message: `Something went wrong: ${error}`,
      };
    }
  }

  public async updateGameServices(
    id: number,
    values: IGamesInformation
  ): Promise<IResult> {
    try {
      if (!id) {
        return {
          status: 404,
          message: 'Missing Id',
        };
      }
      if (!values || Object.keys(values).length === 0) {
        return {
          status: 404,
          message: 'Missing Values',
        };
      }

      const result = await this._gameRepository.updateGameRepository(id, values);

      return {
        status: result.status,
        message: result.message,
      };
    } catch (error) {
      console.log('updateGameServices Service:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }

  public async deleteGameServices(id: number): Promise<IResult> {
    try {
      if (!id) {
        return {
          status: 404,
          message: 'Missing Id',
        };
      }

      const result = await this._gameRepository.deleteGameRepository(id);

      return {
        status: result.status,
        message: result.message,
      };
    } catch (error) {
      console.log('deleteGameService Service:', error);
      return {
        status: 500,
        message: 'Something went wrong',
      };
    }
  }
}
