// repositories/CarLogRepository.ts
import CarLog from '../models/carLogs';

class CarLogRepository {
    static async createLog(logData: Partial<CarLog>): Promise<CarLog> {
        return CarLog.query().insert(logData);
      }
      

  static async getAll(): Promise<CarLog[]> {
    return CarLog.query();
  }
}

export default CarLogRepository;
