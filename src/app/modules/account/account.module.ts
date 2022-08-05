import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountRoutingModule } from "./account-routing.module";
import { AccountComponent } from "./account.component";
import { FriendListsProfileComponent } from "./friend-lists-profile/friend-lists-profile.component";
import { TimelineProfileComponent } from "./timeline-profile/timeline-profile.component";
import { PhotoGalleryProfileComponent } from "./photo-gallery-profile/photo-gallery-profile.component";
import { PersonalDetailsComponent } from "./personal-details/personal-details.component";
import { PersonalDetailsEditComponent } from "./personal-details-edit/personal-details-edit.component";
import { SignInEditComponent } from "./sign-in-edit/sign-in-edit.component";
import { NotificationAccountComponent } from "./notification-account/notification-account.component";
import { TimelineWrapperAccountComponent } from "./timeline-wrapper-account/timeline-wrapper-account.component";
import { ProfileSidebarComponent } from "./profile-sidebar/profile-sidebar.component";
import { WigitModule } from "src/app/partials/layouts/wigit/wigit.module";
import { AccountSettingComponent } from "./account-setting/account-setting.component";
import { SharedModule } from "src/app/partials/content/shared-components/shared.module";
import { AllFriendsComponent } from "./all-friends/all-friends.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { FeaturePhotosComponent } from "./feature-photos/feature-photos.component";
import { ProfileBriefInfoComponent } from "./profile-brief-info/profile-brief-info.component";
import { PageSuggestionComponent } from "./page-suggestion/page-suggestion.component";
import { GroupSuggestionsComponent } from "./group-suggestions/group-suggestions.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { ProfileOverviewWrapperComponent } from "./profile-overview-wrapper/profile-overview-wrapper.component";

@NgModule({
  declarations: [
    AccountComponent,
    FriendListsProfileComponent,
    TimelineProfileComponent,
    PhotoGalleryProfileComponent,
    NotificationAccountComponent,
    SignInEditComponent,
    PersonalDetailsEditComponent,
    PersonalDetailsComponent,
    TimelineWrapperAccountComponent,
    ProfileSidebarComponent,
    AccountSettingComponent,
    AllFriendsComponent,
    CreatePostComponent,
    FeaturePhotosComponent,
    ProfileBriefInfoComponent,
    PageSuggestionComponent,
    GroupSuggestionsComponent,
    EditProfileComponent,
    ProfileOverviewWrapperComponent,
  ],
  imports: [CommonModule, WigitModule, SharedModule, AccountRoutingModule],
})
export class AccountModule {}
