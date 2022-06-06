import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AccountComponent } from "./account.component";
import { PhotoGalleryProfileComponent } from "./photo-gallery-profile/photo-gallery-profile.component";
import { FriendListsProfileComponent } from "./friend-lists-profile/friend-lists-profile.component";
import { PersonalDetailsEditComponent } from "./personal-details-edit/personal-details-edit.component";
import { TimelineWrapperAccountComponent } from "./timeline-wrapper-account/timeline-wrapper-account.component";
import { PersonalDetailsComponent } from "./personal-details/personal-details.component";
import { NotificationAccountComponent } from "./notification-account/notification-account.component";
import { SignInEditComponent } from "./sign-in-edit/sign-in-edit.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";
import { AllFriendsComponent } from "./all-friends/all-friends.component";
const routes: Routes = [
  {
    path: "",
    component: AccountComponent,
    children: [
      {
        path: "profile-information",
        component: PersonalDetailsComponent,
        data: { breadcrumb: "Profile Info" },
      },
      {
        path: "email-setting",
        component: NotificationAccountComponent,
        data: { breadcrumb: "Email Setting" },
      },
      {
        path: "change-password",
        component: SignInEditComponent,
        data: { breadcrumb: "Change Password" },
      },
      {
        path: "account-setting",
        component: AccountSettingComponent,
        data: { breadcrumb: "Account Setting" },
      },
      {
        path: "account-information",
        component: PersonalDetailsEditComponent,
        data: { breadcrumb: "Account Info" },
      },
      {
        path: "timeline",
        component: TimelineWrapperAccountComponent,
        data: { breadcrumb: "Timeline" },
      },
      {
        path: "photos",
        component: PhotoGalleryProfileComponent,
        data: { breadcrumb: "Photos" },
      },
      {
        path: "friend-list",
        component: AllFriendsComponent,
        data: { breadcrumb: "Friend List" },
      },
      {
        path: "",
        redirectTo: "/timeline",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
