import { makeAutoObservable } from "mobx";
import { type StatusType } from "~/shared/model/status-type";
import { api } from "~/shared/api/api";


class BillsModule {
  constructor() {
    makeAutoObservable(this);
  }

  bills: IBill[] = [];

  status: StatusType = "idle";

  setStatus = (status: StatusType): void => {
    this.status = status;
  };

  setBills = (bills: IBill[]): void => {
    this.bills = bills;
  };
  
  changeBillBalance = (id: number, balance: number): void => {
    this.bills = this.bills.map((bill) => {
      if (bill.id === id) {
        return { ...bill, balance };
      }
      return bill;
    });
  };

  fetchBills = async (): Promise<void> => {
    try {
      this.setStatus("loading");
      const res = await api.get<IBill[]>("/bills");
      this.setBills(res.data);
      this.setStatus("success");
    } catch (e) {
      this.setStatus("error");
    }
  };

  createBill = async (title: string, balance: number): Promise<boolean> => {
    try {
      const res = await api.post<IBill>("/bills", { title, balance });
      this.setBills([...this.bills, res.data]);
      return true;
    } catch (e) {
      this.setStatus("error");
      return false;
    }
  };
}

export default new BillsModule();
