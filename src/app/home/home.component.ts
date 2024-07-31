import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../models/user.model';
import { UserFacadeService } from '../services/user-facade.service';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
} from '@angular/forms';
import { SubSink } from 'subsink';
import { CommonModule } from '@angular/common';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private readonly sub: SubSink = new SubSink();
  usersList: UserResponse[] = [];
  editingUserId: number | null;
  editAllClicked = false;
  form: FormGroup;

  constructor(
    private userFacadeService: UserFacadeService,
    private fb: NonNullableFormBuilder
  ) {
    this.editingUserId = null;
    this.form = fb.group({
      usersForm: fb.array([]),
    });
  }

  ngOnInit(): void {
    this.requestForUsersData();
    this.initializeUsers();
  }

  get usersForm(): FormArray {
    return this.form.get('usersForm') as FormArray;
  }

  getSingleUserRowControl(index: number): FormGroup {
    return this.usersForm.controls[index] as FormGroup;
  }

  requestForUsersData(): void {
    this.userFacadeService.setUsers();
  }

  initializeUsers(): void {
    this.sub.sink = this.userFacadeService.users$.subscribe({
      next: (users: UserResponse[]) => {
        console.log(users);
        this.usersList = cloneDeep(users);
        console.log(this.fb);
        console.log(this.form);
        this.usersList.forEach((user) => {
          this.usersForm.push(this.populateUsersForm(user));
          // this.form.get('usersForm')?.patchValue({
          //   id: user.id,
          //   name: user.name,
          //   userName: user.name,
          //   email: user.email,
          // });
        });
      },
    });
  }

  editUserInfo(userInfo: UserResponse): void {
    this.editingUserId = userInfo.id;
  }

  saveUserInfo(userInfo: UserResponse): void {
    this.userFacadeService.saveUser(userInfo);
    this.editingUserId = null;
  }

  editAll(): void {
    this.editAllClicked = true;
  }

  saveAll(multipleUserInfo?: UserResponse[]): void {
    console.log(multipleUserInfo);
    // this.userFacadeService.saveUsersData(multipleUserInfo);
    this.editAllClicked = false;
  }

  populateUsersForm(user: UserResponse) {
    return this.fb.group({
      id: [user.id],
      name: [user.name],
      userName: [user.username],
      email: [user.email],
    });
  }
}
