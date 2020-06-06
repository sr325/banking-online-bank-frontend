import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class MainPageService {

  localhost: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {
  }

// Account holder
  public getAccountHolderByAccountHolderUid(accountId: number): Observable<any> {
    return this.http.get(this.localhost + "api/getAccountHolderByAccountHolderUid?accountHolderUid=" + accountId);
    //http://localhost:8080/api/getTransactions=1
  }

//  Account
  public getAccount(accountId: number): Observable<any>{
    return this.http.get(this.localhost + "api/getAccount?accountId=" + accountId);
  }

// Transaction
  public getTransactionsForAccountHolder(accountId: number): Observable<any> {
    return this.http.get(this.localhost + "api/getTransactions?accountId=" + accountId);
    //http://localhost:8080/api/getTransactions=1
  }

  public getTransactionForAccountHolder(accountId: number): Observable<any> {
    return this.http.get(this.localhost + "api/getTransaction?accountId=" + accountId);
  }
}
