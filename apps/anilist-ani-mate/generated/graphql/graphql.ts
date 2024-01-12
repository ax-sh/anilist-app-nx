// 🛑 NOTICE: Add the __generated__ folders to the .gitignore file.
/* eslint-disable */
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
export const AnimePartsFragmentDoc = gql`
  fragment AnimeParts on Media {
    id
    title {
      romaji
      userPreferred
      native
      english
    }
    coverImage {
      extraLarge
    }
    idMal
    status
  }
`;
export const UserAnimeListDocument = gql`
  query UserAnimeList($username: String) {
    MediaListCollection(
      userName: $username
      type: ANIME
      sort: UPDATED_TIME_DESC
    ) {
      lists {
        entries {
          media {
            ...AnimeParts
          }
        }
      }
    }
  }
  ${AnimePartsFragmentDoc}
`;

/**
 * __useUserAnimeListQuery__
 *
 * To run a query within a React component, call `useUserAnimeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAnimeListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAnimeListQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserAnimeListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    IUserAnimeListQuery,
    IUserAnimeListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<IUserAnimeListQuery, IUserAnimeListQueryVariables>(
    UserAnimeListDocument,
    options,
  );
}
export function useUserAnimeListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IUserAnimeListQuery,
    IUserAnimeListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<IUserAnimeListQuery, IUserAnimeListQueryVariables>(
    UserAnimeListDocument,
    options,
  );
}
export function useUserAnimeListSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    IUserAnimeListQuery,
    IUserAnimeListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    IUserAnimeListQuery,
    IUserAnimeListQueryVariables
  >(UserAnimeListDocument, options);
}
export type UserAnimeListQueryHookResult = ReturnType<
  typeof useUserAnimeListQuery
>;
export type UserAnimeListLazyQueryHookResult = ReturnType<
  typeof useUserAnimeListLazyQuery
>;
export type UserAnimeListSuspenseQueryHookResult = ReturnType<
  typeof useUserAnimeListSuspenseQuery
>;
export const AnimeDocument = gql`
  query Anime($id: Int) {
    Media(id: $id, type: ANIME) {
      ...AnimeParts
      characters {
        nodes {
          gender
          image {
            large
          }
          name {
            userPreferred
          }
          id
          favourites
          isFavourite
        }
      }
    }
  }
  ${AnimePartsFragmentDoc}
`;

/**
 * __useAnimeQuery__
 *
 * To run a query within a React component, call `useAnimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAnimeQuery(
  baseOptions?: Apollo.QueryHookOptions<IAnimeQuery, IAnimeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<IAnimeQuery, IAnimeQueryVariables>(
    AnimeDocument,
    options,
  );
}
export function useAnimeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IAnimeQuery, IAnimeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<IAnimeQuery, IAnimeQueryVariables>(
    AnimeDocument,
    options,
  );
}
export function useAnimeSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    IAnimeQuery,
    IAnimeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<IAnimeQuery, IAnimeQueryVariables>(
    AnimeDocument,
    options,
  );
}
export type AnimeQueryHookResult = ReturnType<typeof useAnimeQuery>;
export type AnimeLazyQueryHookResult = ReturnType<typeof useAnimeLazyQuery>;
export type AnimeSuspenseQueryHookResult = ReturnType<
  typeof useAnimeSuspenseQuery
>;
export const AnilistUserProfileQueryDocument = gql`
  query AnilistUserProfileQuery {
    Viewer {
      id
      name
      avatar {
        large
      }
    }
  }
`;

/**
 * __useAnilistUserProfileQueryQuery__
 *
 * To run a query within a React component, call `useAnilistUserProfileQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnilistUserProfileQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnilistUserProfileQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useAnilistUserProfileQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    IAnilistUserProfileQueryQuery,
    IAnilistUserProfileQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    IAnilistUserProfileQueryQuery,
    IAnilistUserProfileQueryQueryVariables
  >(AnilistUserProfileQueryDocument, options);
}
export function useAnilistUserProfileQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IAnilistUserProfileQueryQuery,
    IAnilistUserProfileQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    IAnilistUserProfileQueryQuery,
    IAnilistUserProfileQueryQueryVariables
  >(AnilistUserProfileQueryDocument, options);
}
export function useAnilistUserProfileQuerySuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    IAnilistUserProfileQueryQuery,
    IAnilistUserProfileQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    IAnilistUserProfileQueryQuery,
    IAnilistUserProfileQueryQueryVariables
  >(AnilistUserProfileQueryDocument, options);
}
export type AnilistUserProfileQueryQueryHookResult = ReturnType<
  typeof useAnilistUserProfileQueryQuery
>;
export type AnilistUserProfileQueryLazyQueryHookResult = ReturnType<
  typeof useAnilistUserProfileQueryLazyQuery
>;
export type AnilistUserProfileQuerySuspenseQueryHookResult = ReturnType<
  typeof useAnilistUserProfileQuerySuspenseQuery
>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  CountryCode: { input: any; output: any };
  FuzzyDateInt: { input: any; output: any };
  Json: { input: any; output: any };
};

/** Notification for when a activity is liked */
export type IActivityLikeNotification = {
  __typename?: 'ActivityLikeNotification';
  /** The liked activity */
  activity?: Maybe<IActivityUnion>;
  /** The id of the activity which was liked */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<INotificationType>;
  /** The user who liked the activity */
  user?: Maybe<IUser>;
  /** The id of the user who liked to the activity */
  userId: Scalars['Int']['output'];
};

/** Notification for when authenticated user is @ mentioned in activity or reply */
export type IActivityMentionNotification = {
  __typename?: 'ActivityMentionNotification';
  /** The liked activity */
  activity?: Maybe<IActivityUnion>;
  /** The id of the activity where mentioned */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<INotificationType>;
  /** The user who mentioned the authenticated user */
  user?: Maybe<IUser>;
  /** The id of the user who mentioned the authenticated user */
  userId: Scalars['Int']['output'];
};

/** Notification for when a user is send an activity message */
export type IActivityMessageNotification = {
  __typename?: 'ActivityMessageNotification';
  /** The id of the activity message */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The message activity */
  message?: Maybe<IMessageActivity>;
  /** The type of notification */
  type?: Maybe<INotificationType>;
  /** The user who sent the message */
  user?: Maybe<IUser>;
  /** The if of the user who send the message */
  userId: Scalars['Int']['output'];
};

/** Replay to an activity item */
export type IActivityReply = {
  __typename?: 'ActivityReply';
  /** The id of the parent activity */
  activityId?: Maybe<Scalars['Int']['output']>;
  /** The time the reply was created at */
  createdAt: Scalars['Int']['output'];
  /** The id of the reply */
  id: Scalars['Int']['output'];
  /** If the currently authenticated user liked the reply */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the reply has */
  likeCount: Scalars['Int']['output'];
  /** The users who liked the reply */
  likes?: Maybe<Array<Maybe<IUser>>>;
  /** The reply text */
  text?: Maybe<Scalars['String']['output']>;
  /** The user who created reply */
  user?: Maybe<IUser>;
  /** The id of the replies creator */
  userId?: Maybe<Scalars['Int']['output']>;
};

/** Replay to an activity item */
export type IActivityReplyTextArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Notification for when a activity reply is liked */
export type IActivityReplyLikeNotification = {
  __typename?: 'ActivityReplyLikeNotification';
  /** The liked activity */
  activity?: Maybe<IActivityUnion>;
  /** The id of the activity where the reply which was liked */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<INotificationType>;
  /** The user who liked the activity reply */
  user?: Maybe<IUser>;
  /** The id of the user who liked to the activity reply */
  userId: Scalars['Int']['output'];
};

/** Notification for when a user replies to the authenticated users activity */
export type IActivityReplyNotification = {
  __typename?: 'ActivityReplyNotification';
  /** The liked activity */
  activity?: Maybe<IActivityUnion>;
  /** The id of the activity which was replied too */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<INotificationType>;
  /** The user who replied to the activity */
  user?: Maybe<IUser>;
  /** The id of the user who replied to the activity */
  userId: Scalars['Int']['output'];
};

/** Notification for when a user replies to activity the authenticated user has replied to */
export type IActivityReplySubscribedNotification = {
  __typename?: 'ActivityReplySubscribedNotification';
  /** The liked activity */
  activity?: Maybe<IActivityUnion>;
  /** The id of the activity which was replied too */
  activityId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<INotificationType>;
  /** The user who replied to the activity */
  user?: Maybe<IUser>;
  /** The id of the user who replied to the activity */
  userId: Scalars['Int']['output'];
};

/** Activity sort enums */
export enum IActivitySort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Pinned = 'PINNED',
}

/** Activity type enum. */
export enum IActivityType {
  /** A anime list update activity */
  AnimeList = 'ANIME_LIST',
  /** A manga list update activity */
  MangaList = 'MANGA_LIST',
  /** Anime & Manga list update, only used in query arguments */
  MediaList = 'MEDIA_LIST',
  /** A text message activity sent to another user */
  Message = 'MESSAGE',
  /** A text activity */
  Text = 'TEXT',
}

/** Activity union type */
export type IActivityUnion = IListActivity | IMessageActivity | ITextActivity;

/** Notification for when an episode of anime airs */
export type IAiringNotification = {
  __typename?: 'AiringNotification';
  /** The id of the aired anime */
  animeId: Scalars['Int']['output'];
  /** The notification context text */
  contexts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The episode number that just aired */
  episode: Scalars['Int']['output'];
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The associated media of the airing schedule */
  media?: Maybe<IMedia>;
  /** The type of notification */
  type?: Maybe<INotificationType>;
};

/** Score & Watcher stats for airing anime by episode and mid-week */
export type IAiringProgression = {
  __typename?: 'AiringProgression';
  /** The episode the stats were recorded at. .5 is the mid point between 2 episodes airing dates. */
  episode?: Maybe<Scalars['Float']['output']>;
  /** The average score for the media */
  score?: Maybe<Scalars['Float']['output']>;
  /** The amount of users watching the anime */
  watching?: Maybe<Scalars['Int']['output']>;
};

/** Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate. */
export type IAiringSchedule = {
  __typename?: 'AiringSchedule';
  /** The time the episode airs at */
  airingAt: Scalars['Int']['output'];
  /** The airing episode number */
  episode: Scalars['Int']['output'];
  /** The id of the airing schedule item */
  id: Scalars['Int']['output'];
  /** The associate media of the airing episode */
  media?: Maybe<IMedia>;
  /** The associate media id of the airing episode */
  mediaId: Scalars['Int']['output'];
  /** Seconds until episode starts airing */
  timeUntilAiring: Scalars['Int']['output'];
};

export type IAiringScheduleConnection = {
  __typename?: 'AiringScheduleConnection';
  edges?: Maybe<Array<Maybe<IAiringScheduleEdge>>>;
  nodes?: Maybe<Array<Maybe<IAiringSchedule>>>;
  /** The pagination information */
  pageInfo?: Maybe<IPageInfo>;
};

/** AiringSchedule connection edge */
export type IAiringScheduleEdge = {
  __typename?: 'AiringScheduleEdge';
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  node?: Maybe<IAiringSchedule>;
};

export type IAiringScheduleInput = {
  airingAt?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  timeUntilAiring?: InputMaybe<Scalars['Int']['input']>;
};

/** Airing schedule sort enums */
export enum IAiringSort {
  Episode = 'EPISODE',
  EpisodeDesc = 'EPISODE_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Time = 'TIME',
  TimeDesc = 'TIME_DESC',
}

export type IAniChartHighlightInput = {
  highlight?: InputMaybe<Scalars['String']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
};

export type IAniChartUser = {
  __typename?: 'AniChartUser';
  highlights?: Maybe<Scalars['Json']['output']>;
  settings?: Maybe<Scalars['Json']['output']>;
  user?: Maybe<IUser>;
};

/** A character that features in an anime or manga */
export type ICharacter = {
  __typename?: 'Character';
  /** The character's age. Note this is a string, not an int, it may contain further text and additional ages. */
  age?: Maybe<Scalars['String']['output']>;
  /** The characters blood type */
  bloodType?: Maybe<Scalars['String']['output']>;
  /** The character's birth date */
  dateOfBirth?: Maybe<IFuzzyDate>;
  /** A general description of the character */
  description?: Maybe<Scalars['String']['output']>;
  /** The amount of user's who have favourited the character */
  favourites?: Maybe<Scalars['Int']['output']>;
  /** The character's gender. Usually Male, Female, or Non-binary but can be any string. */
  gender?: Maybe<Scalars['String']['output']>;
  /** The id of the character */
  id: Scalars['Int']['output'];
  /** Character images */
  image?: Maybe<ICharacterImage>;
  /** If the character is marked as favourite by the currently authenticated user */
  isFavourite: Scalars['Boolean']['output'];
  /** If the character is blocked from being added to favourites */
  isFavouriteBlocked: Scalars['Boolean']['output'];
  /** Media that includes the character */
  media?: Maybe<IMediaConnection>;
  /** Notes for site moderators */
  modNotes?: Maybe<Scalars['String']['output']>;
  /** The names of the character */
  name?: Maybe<ICharacterName>;
  /** The url for the character page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** @deprecated No data available */
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

/** A character that features in an anime or manga */
export type ICharacterDescriptionArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A character that features in an anime or manga */
export type ICharacterMediaArgs = {
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IMediaSort>>>;
  type?: InputMaybe<IMediaType>;
};

export type ICharacterConnection = {
  __typename?: 'CharacterConnection';
  edges?: Maybe<Array<Maybe<ICharacterEdge>>>;
  nodes?: Maybe<Array<Maybe<ICharacter>>>;
  /** The pagination information */
  pageInfo?: Maybe<IPageInfo>;
};

/** Character connection edge */
export type ICharacterEdge = {
  __typename?: 'CharacterEdge';
  /** The order the character should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']['output']>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  /** The media the character is in */
  media?: Maybe<Array<Maybe<IMedia>>>;
  /** Media specific character name */
  name?: Maybe<Scalars['String']['output']>;
  node?: Maybe<ICharacter>;
  /** The characters role in the media */
  role?: Maybe<ICharacterRole>;
  /** The voice actors of the character with role date */
  voiceActorRoles?: Maybe<Array<Maybe<IStaffRoleType>>>;
  /** The voice actors of the character */
  voiceActors?: Maybe<Array<Maybe<IStaff>>>;
};

/** Character connection edge */
export type ICharacterEdgeVoiceActorRolesArgs = {
  language?: InputMaybe<IStaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<IStaffSort>>>;
};

/** Character connection edge */
export type ICharacterEdgeVoiceActorsArgs = {
  language?: InputMaybe<IStaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<IStaffSort>>>;
};

export type ICharacterImage = {
  __typename?: 'CharacterImage';
  /** The character's image of media at its largest size */
  large?: Maybe<Scalars['String']['output']>;
  /** The character's image of media at medium size */
  medium?: Maybe<Scalars['String']['output']>;
};

/** The names of the character */
export type ICharacterName = {
  __typename?: 'CharacterName';
  /** Other names the character might be referred to as */
  alternative?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Other names the character might be referred to as but are spoilers */
  alternativeSpoiler?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The character's given name */
  first?: Maybe<Scalars['String']['output']>;
  /** The character's first and last name */
  full?: Maybe<Scalars['String']['output']>;
  /** The character's surname */
  last?: Maybe<Scalars['String']['output']>;
  /** The character's middle name */
  middle?: Maybe<Scalars['String']['output']>;
  /** The character's full name in their native language */
  native?: Maybe<Scalars['String']['output']>;
  /** The currently authenticated users preferred name language. Default romaji for non-authenticated */
  userPreferred?: Maybe<Scalars['String']['output']>;
};

/** The names of the character */
export type ICharacterNameInput = {
  /** Other names the character might be referred by */
  alternative?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Other names the character might be referred to as but are spoilers */
  alternativeSpoiler?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  /** The character's given name */
  first?: InputMaybe<Scalars['String']['input']>;
  /** The character's surname */
  last?: InputMaybe<Scalars['String']['input']>;
  /** The character's middle name */
  middle?: InputMaybe<Scalars['String']['input']>;
  /** The character's full name in their native language */
  native?: InputMaybe<Scalars['String']['input']>;
};

/** The role the character plays in the media */
export enum ICharacterRole {
  /** A background character in the media */
  Background = 'BACKGROUND',
  /** A primary character role in the media */
  Main = 'MAIN',
  /** A supporting character role in the media */
  Supporting = 'SUPPORTING',
}

/** Character sort enums */
export enum ICharacterSort {
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  /** Order manually decided by moderators */
  Relevance = 'RELEVANCE',
  Role = 'ROLE',
  RoleDesc = 'ROLE_DESC',
  SearchMatch = 'SEARCH_MATCH',
}

/** A submission for a character that features in an anime or manga */
export type ICharacterSubmission = {
  __typename?: 'CharacterSubmission';
  /** Data Mod assigned to handle the submission */
  assignee?: Maybe<IUser>;
  /** Character that the submission is referencing */
  character?: Maybe<ICharacter>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the submission */
  id: Scalars['Int']['output'];
  /** Whether the submission is locked */
  locked?: Maybe<Scalars['Boolean']['output']>;
  /** Inner details of submission status */
  notes?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  /** Status of the submission */
  status?: Maybe<ISubmissionStatus>;
  /** The character submission changes */
  submission?: Maybe<ICharacter>;
  /** Submitter for the submission */
  submitter?: Maybe<IUser>;
};

export type ICharacterSubmissionConnection = {
  __typename?: 'CharacterSubmissionConnection';
  edges?: Maybe<Array<Maybe<ICharacterSubmissionEdge>>>;
  nodes?: Maybe<Array<Maybe<ICharacterSubmission>>>;
  /** The pagination information */
  pageInfo?: Maybe<IPageInfo>;
};

/** CharacterSubmission connection edge */
export type ICharacterSubmissionEdge = {
  __typename?: 'CharacterSubmissionEdge';
  node?: Maybe<ICharacterSubmission>;
  /** The characters role in the media */
  role?: Maybe<ICharacterRole>;
  /** The submitted voice actors of the character */
  submittedVoiceActors?: Maybe<Array<Maybe<IStaffSubmission>>>;
  /** The voice actors of the character */
  voiceActors?: Maybe<Array<Maybe<IStaff>>>;
};

/** Deleted data type */
export type IDeleted = {
  __typename?: 'Deleted';
  /** If an item has been successfully deleted */
  deleted?: Maybe<Scalars['Boolean']['output']>;
};

export enum IExternalLinkMediaType {
  Anime = 'ANIME',
  Manga = 'MANGA',
  Staff = 'STAFF',
}

export enum IExternalLinkType {
  Info = 'INFO',
  Social = 'SOCIAL',
  Streaming = 'STREAMING',
}

/** User's favourite anime, manga, characters, staff & studios */
export type IFavourites = {
  __typename?: 'Favourites';
  /** Favourite anime */
  anime?: Maybe<IMediaConnection>;
  /** Favourite characters */
  characters?: Maybe<ICharacterConnection>;
  /** Favourite manga */
  manga?: Maybe<IMediaConnection>;
  /** Favourite staff */
  staff?: Maybe<IStaffConnection>;
  /** Favourite studios */
  studios?: Maybe<IStudioConnection>;
};

/** User's favourite anime, manga, characters, staff & studios */
export type IFavouritesAnimeArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** User's favourite anime, manga, characters, staff & studios */
export type IFavouritesCharactersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** User's favourite anime, manga, characters, staff & studios */
export type IFavouritesMangaArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** User's favourite anime, manga, characters, staff & studios */
export type IFavouritesStaffArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** User's favourite anime, manga, characters, staff & studios */
export type IFavouritesStudiosArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Notification for when the authenticated user is followed by another user */
export type IFollowingNotification = {
  __typename?: 'FollowingNotification';
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<INotificationType>;
  /** The liked activity */
  user?: Maybe<IUser>;
  /** The id of the user who followed the authenticated user */
  userId: Scalars['Int']['output'];
};

/** User's format statistics */
export type IFormatStats = {
  __typename?: 'FormatStats';
  amount?: Maybe<Scalars['Int']['output']>;
  format?: Maybe<IMediaFormat>;
};

/** Date object that allows for incomplete date values (fuzzy) */
export type IFuzzyDate = {
  __typename?: 'FuzzyDate';
  /** Numeric Day (24) */
  day?: Maybe<Scalars['Int']['output']>;
  /** Numeric Month (3) */
  month?: Maybe<Scalars['Int']['output']>;
  /** Numeric Year (2017) */
  year?: Maybe<Scalars['Int']['output']>;
};

/** Date object that allows for incomplete date values (fuzzy) */
export type IFuzzyDateInput = {
  /** Numeric Day (24) */
  day?: InputMaybe<Scalars['Int']['input']>;
  /** Numeric Month (3) */
  month?: InputMaybe<Scalars['Int']['input']>;
  /** Numeric Year (2017) */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** User's genre statistics */
export type IGenreStats = {
  __typename?: 'GenreStats';
  amount?: Maybe<Scalars['Int']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  meanScore?: Maybe<Scalars['Int']['output']>;
  /** The amount of time in minutes the genre has been watched by the user */
  timeWatched?: Maybe<Scalars['Int']['output']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPage = {
  __typename?: 'InternalPage';
  activities?: Maybe<Array<Maybe<IActivityUnion>>>;
  activityReplies?: Maybe<Array<Maybe<IActivityReply>>>;
  airingSchedules?: Maybe<Array<Maybe<IAiringSchedule>>>;
  characterSubmissions?: Maybe<Array<Maybe<ICharacterSubmission>>>;
  characters?: Maybe<Array<Maybe<ICharacter>>>;
  followers?: Maybe<Array<Maybe<IUser>>>;
  following?: Maybe<Array<Maybe<IUser>>>;
  likes?: Maybe<Array<Maybe<IUser>>>;
  media?: Maybe<Array<Maybe<IMedia>>>;
  mediaList?: Maybe<Array<Maybe<IMediaList>>>;
  mediaSubmissions?: Maybe<Array<Maybe<IMediaSubmission>>>;
  mediaTrends?: Maybe<Array<Maybe<IMediaTrend>>>;
  modActions?: Maybe<Array<Maybe<IModAction>>>;
  notifications?: Maybe<Array<Maybe<INotificationUnion>>>;
  /** The pagination information */
  pageInfo?: Maybe<IPageInfo>;
  recommendations?: Maybe<Array<Maybe<IRecommendation>>>;
  reports?: Maybe<Array<Maybe<IReport>>>;
  reviews?: Maybe<Array<Maybe<IReview>>>;
  revisionHistory?: Maybe<Array<Maybe<IRevisionHistory>>>;
  staff?: Maybe<Array<Maybe<IStaff>>>;
  staffSubmissions?: Maybe<Array<Maybe<IStaffSubmission>>>;
  studios?: Maybe<Array<Maybe<IStudio>>>;
  threadComments?: Maybe<Array<Maybe<IThreadComment>>>;
  threads?: Maybe<Array<Maybe<IThread>>>;
  userBlockSearch?: Maybe<Array<Maybe<IUser>>>;
  users?: Maybe<Array<Maybe<IUser>>>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageActivitiesArgs = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_greater?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  hasReplies?: InputMaybe<Scalars['Boolean']['input']>;
  hasRepliesOrTypeText?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId?: InputMaybe<Scalars['Int']['input']>;
  messengerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId_not?: InputMaybe<Scalars['Int']['input']>;
  messengerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<IActivitySort>>>;
  type?: InputMaybe<IActivityType>;
  type_in?: InputMaybe<Array<InputMaybe<IActivityType>>>;
  type_not?: InputMaybe<IActivityType>;
  type_not_in?: InputMaybe<Array<InputMaybe<IActivityType>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userId_not?: InputMaybe<Scalars['Int']['input']>;
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageActivityRepliesArgs = {
  activityId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageAiringSchedulesArgs = {
  airingAt?: InputMaybe<Scalars['Int']['input']>;
  airingAt_greater?: InputMaybe<Scalars['Int']['input']>;
  airingAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  episode_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IAiringSort>>>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageCharacterSubmissionsArgs = {
  assigneeId?: InputMaybe<Scalars['Int']['input']>;
  characterId?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ISubmissionSort>>>;
  status?: InputMaybe<ISubmissionStatus>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageCharactersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ICharacterSort>>>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageFollowersArgs = {
  sort?: InputMaybe<Array<InputMaybe<IUserSort>>>;
  userId: Scalars['Int']['input'];
};

/** Page of data (Used for internal use only) */
export type IInternalPageFollowingArgs = {
  sort?: InputMaybe<Array<InputMaybe<IUserSort>>>;
  userId: Scalars['Int']['input'];
};

/** Page of data (Used for internal use only) */
export type IInternalPageLikesArgs = {
  likeableId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ILikeableType>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageMediaArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  chapters?: InputMaybe<Scalars['Int']['input']>;
  chapters_greater?: InputMaybe<Scalars['Int']['input']>;
  chapters_lesser?: InputMaybe<Scalars['Int']['input']>;
  countryOfOrigin?: InputMaybe<Scalars['CountryCode']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  duration_greater?: InputMaybe<Scalars['Int']['input']>;
  duration_lesser?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_like?: InputMaybe<Scalars['String']['input']>;
  episodes?: InputMaybe<Scalars['Int']['input']>;
  episodes_greater?: InputMaybe<Scalars['Int']['input']>;
  episodes_lesser?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<IMediaFormat>;
  format_in?: InputMaybe<Array<InputMaybe<IMediaFormat>>>;
  format_not?: InputMaybe<IMediaFormat>;
  format_not_in?: InputMaybe<Array<InputMaybe<IMediaFormat>>>;
  genre?: InputMaybe<Scalars['String']['input']>;
  genre_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genre_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  idMal?: InputMaybe<Scalars['Int']['input']>;
  idMal_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  idMal_not?: InputMaybe<Scalars['Int']['input']>;
  idMal_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isAdult?: InputMaybe<Scalars['Boolean']['input']>;
  isLicensed?: InputMaybe<Scalars['Boolean']['input']>;
  licensedBy?: InputMaybe<Scalars['String']['input']>;
  licensedById?: InputMaybe<Scalars['Int']['input']>;
  licensedById_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  licensedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minimumTagRank?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<IMediaSeason>;
  seasonYear?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IMediaSort>>>;
  source?: InputMaybe<IMediaSource>;
  source_in?: InputMaybe<Array<InputMaybe<IMediaSource>>>;
  startDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<IMediaStatus>;
  status_in?: InputMaybe<Array<InputMaybe<IMediaStatus>>>;
  status_not?: InputMaybe<IMediaStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<IMediaStatus>>>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tagCategory?: InputMaybe<Scalars['String']['input']>;
  tagCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagCategory_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  tag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<IMediaType>;
  volumes?: InputMaybe<Scalars['Int']['input']>;
  volumes_greater?: InputMaybe<Scalars['Int']['input']>;
  volumes_lesser?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageMediaListArgs = {
  compareWithAuthList?: InputMaybe<Scalars['Boolean']['input']>;
  completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_like?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  notes_like?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IMediaListSort>>>;
  startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<IMediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<IMediaListStatus>>>;
  status_not?: InputMaybe<IMediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<IMediaListStatus>>>;
  type?: InputMaybe<IMediaType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageMediaSubmissionsArgs = {
  assigneeId?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ISubmissionSort>>>;
  status?: InputMaybe<ISubmissionStatus>;
  submissionId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<IMediaType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageMediaTrendsArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_greater?: InputMaybe<Scalars['Int']['input']>;
  date_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  releasing?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IMediaTrendSort>>>;
  trending?: InputMaybe<Scalars['Int']['input']>;
  trending_greater?: InputMaybe<Scalars['Int']['input']>;
  trending_lesser?: InputMaybe<Scalars['Int']['input']>;
  trending_not?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageModActionsArgs = {
  modId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageNotificationsArgs = {
  resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<INotificationType>;
  type_in?: InputMaybe<Array<InputMaybe<INotificationType>>>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageRecommendationsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  rating_greater?: InputMaybe<Scalars['Int']['input']>;
  rating_lesser?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IRecommendationSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageReportsArgs = {
  reportedId?: InputMaybe<Scalars['Int']['input']>;
  reporterId?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageReviewsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<IMediaType>;
  sort?: InputMaybe<Array<InputMaybe<IReviewSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageRevisionHistoryArgs = {
  characterId?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
  studioId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageStaffArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IStaffSort>>>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageStaffSubmissionsArgs = {
  assigneeId?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ISubmissionSort>>>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ISubmissionStatus>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageStudiosArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IStudioSort>>>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageThreadCommentsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IThreadCommentSort>>>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageThreadsArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaCategoryId?: InputMaybe<Scalars['Int']['input']>;
  replyUserId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IThreadSort>>>;
  subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageUserBlockSearchArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};

/** Page of data (Used for internal use only) */
export type IInternalPageUsersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IUserSort>>>;
};

/** Types that can be liked */
export enum ILikeableType {
  Activity = 'ACTIVITY',
  ActivityReply = 'ACTIVITY_REPLY',
  Thread = 'THREAD',
  ThreadComment = 'THREAD_COMMENT',
}

/** Likeable union type */
export type ILikeableUnion =
  | IActivityReply
  | IListActivity
  | IMessageActivity
  | ITextActivity
  | IThread
  | IThreadComment;

/** User list activity (anime & manga updates) */
export type IListActivity = {
  __typename?: 'ListActivity';
  /** The time the activity was created at */
  createdAt: Scalars['Int']['output'];
  /** The id of the activity */
  id: Scalars['Int']['output'];
  /** If the currently authenticated user liked the activity */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** If the activity is locked and can receive replies */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the activity is pinned to the top of the users activity feed */
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the activity has */
  likeCount: Scalars['Int']['output'];
  /** The users who liked the activity */
  likes?: Maybe<Array<Maybe<IUser>>>;
  /** The associated media to the activity update */
  media?: Maybe<IMedia>;
  /** The list progress made */
  progress?: Maybe<Scalars['String']['output']>;
  /** The written replies to the activity */
  replies?: Maybe<Array<Maybe<IActivityReply>>>;
  /** The number of activity replies */
  replyCount: Scalars['Int']['output'];
  /** The url for the activity page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The list item's textual status */
  status?: Maybe<Scalars['String']['output']>;
  /** The type of activity */
  type?: Maybe<IActivityType>;
  /** The owner of the activity */
  user?: Maybe<IUser>;
  /** The user id of the activity's creator */
  userId?: Maybe<Scalars['Int']['output']>;
};

export type IListActivityOption = {
  __typename?: 'ListActivityOption';
  disabled?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<IMediaListStatus>;
};

export type IListActivityOptionInput = {
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<IMediaListStatus>;
};

/** User's list score statistics */
export type IListScoreStats = {
  __typename?: 'ListScoreStats';
  meanScore?: Maybe<Scalars['Int']['output']>;
  standardDeviation?: Maybe<Scalars['Int']['output']>;
};

/** Anime or Manga */
export type IMedia = {
  __typename?: 'Media';
  /** The media's entire airing schedule */
  airingSchedule?: Maybe<IAiringScheduleConnection>;
  /** If the media should have forum thread automatically created for it on airing episode release */
  autoCreateForumThread?: Maybe<Scalars['Boolean']['output']>;
  /** A weighted average score of all the user's scores of the media */
  averageScore?: Maybe<Scalars['Int']['output']>;
  /** The banner image of the media */
  bannerImage?: Maybe<Scalars['String']['output']>;
  /** The amount of chapters the manga has when complete */
  chapters?: Maybe<Scalars['Int']['output']>;
  /** The characters in the media */
  characters?: Maybe<ICharacterConnection>;
  /** Where the media was created. (ISO 3166-1 alpha-2) */
  countryOfOrigin?: Maybe<Scalars['CountryCode']['output']>;
  /** The cover images of the media */
  coverImage?: Maybe<IMediaCoverImage>;
  /** Short description of the media's story and characters */
  description?: Maybe<Scalars['String']['output']>;
  /** The general length of each anime episode in minutes */
  duration?: Maybe<Scalars['Int']['output']>;
  /** The last official release date of the media */
  endDate?: Maybe<IFuzzyDate>;
  /** The amount of episodes the anime has when complete */
  episodes?: Maybe<Scalars['Int']['output']>;
  /** External links to another site related to the media */
  externalLinks?: Maybe<Array<Maybe<IMediaExternalLink>>>;
  /** The amount of user's who have favourited the media */
  favourites?: Maybe<Scalars['Int']['output']>;
  /** The format the media was released in */
  format?: Maybe<IMediaFormat>;
  /** The genres of the media */
  genres?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Official Twitter hashtags for the media */
  hashtag?: Maybe<Scalars['String']['output']>;
  /** The id of the media */
  id: Scalars['Int']['output'];
  /** The mal id of the media */
  idMal?: Maybe<Scalars['Int']['output']>;
  /** If the media is intended only for 18+ adult audiences */
  isAdult?: Maybe<Scalars['Boolean']['output']>;
  /** If the media is marked as favourite by the current authenticated user */
  isFavourite: Scalars['Boolean']['output'];
  /** If the media is blocked from being added to favourites */
  isFavouriteBlocked: Scalars['Boolean']['output'];
  /** If the media is officially licensed or a self-published doujin release */
  isLicensed?: Maybe<Scalars['Boolean']['output']>;
  /** Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons. */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the media is blocked from being recommended to/from */
  isRecommendationBlocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the media is blocked from being reviewed */
  isReviewBlocked?: Maybe<Scalars['Boolean']['output']>;
  /** Mean score of all the user's scores of the media */
  meanScore?: Maybe<Scalars['Int']['output']>;
  /** The authenticated user's media list entry for the media */
  mediaListEntry?: Maybe<IMediaList>;
  /** Notes for site moderators */
  modNotes?: Maybe<Scalars['String']['output']>;
  /** The media's next episode airing schedule */
  nextAiringEpisode?: Maybe<IAiringSchedule>;
  /** The number of users with the media on their list */
  popularity?: Maybe<Scalars['Int']['output']>;
  /** The ranking of the media in a particular time span and format compared to other media */
  rankings?: Maybe<Array<Maybe<IMediaRank>>>;
  /** User recommendations for similar media */
  recommendations?: Maybe<IRecommendationConnection>;
  /** Other media in the same or connecting franchise */
  relations?: Maybe<IMediaConnection>;
  /** User reviews of the media */
  reviews?: Maybe<IReviewConnection>;
  /** The season the media was initially released in */
  season?: Maybe<IMediaSeason>;
  /**
   * The year & season the media was initially released in
   * @deprecated
   */
  seasonInt?: Maybe<Scalars['Int']['output']>;
  /** The season year the media was initially released in */
  seasonYear?: Maybe<Scalars['Int']['output']>;
  /** The url for the media page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** Source type the media was adapted from. */
  source?: Maybe<IMediaSource>;
  /** The staff who produced the media */
  staff?: Maybe<IStaffConnection>;
  /** The first official release date of the media */
  startDate?: Maybe<IFuzzyDate>;
  stats?: Maybe<IMediaStats>;
  /** The current releasing status of the media */
  status?: Maybe<IMediaStatus>;
  /** Data and links to legal streaming episodes on external sites */
  streamingEpisodes?: Maybe<Array<Maybe<IMediaStreamingEpisode>>>;
  /** The companies who produced the media */
  studios?: Maybe<IStudioConnection>;
  /** Alternative titles of the media */
  synonyms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** List of tags that describes elements and themes of the media */
  tags?: Maybe<Array<Maybe<IMediaTag>>>;
  /** The official titles of the media in various languages */
  title?: Maybe<IMediaTitle>;
  /** Media trailer or advertisement */
  trailer?: Maybe<IMediaTrailer>;
  /** The amount of related activity in the past hour */
  trending?: Maybe<Scalars['Int']['output']>;
  /** The media's daily trend stats */
  trends?: Maybe<IMediaTrendConnection>;
  /** The type of the media; anime or manga */
  type?: Maybe<IMediaType>;
  /** When the media's data was last updated */
  updatedAt?: Maybe<Scalars['Int']['output']>;
  /** The amount of volumes the manga has when complete */
  volumes?: Maybe<Scalars['Int']['output']>;
};

/** Anime or Manga */
export type IMediaAiringScheduleArgs = {
  notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

/** Anime or Manga */
export type IMediaCharactersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<ICharacterRole>;
  sort?: InputMaybe<Array<InputMaybe<ICharacterSort>>>;
};

/** Anime or Manga */
export type IMediaDescriptionArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Anime or Manga */
export type IMediaRecommendationsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IRecommendationSort>>>;
};

/** Anime or Manga */
export type IMediaReviewsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IReviewSort>>>;
};

/** Anime or Manga */
export type IMediaSourceArgs = {
  version?: InputMaybe<Scalars['Int']['input']>;
};

/** Anime or Manga */
export type IMediaStaffArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IStaffSort>>>;
};

/** Anime or Manga */
export type IMediaStatusArgs = {
  version?: InputMaybe<Scalars['Int']['input']>;
};

/** Anime or Manga */
export type IMediaStudiosArgs = {
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IStudioSort>>>;
};

/** Anime or Manga */
export type IMediaTrendsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  releasing?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IMediaTrendSort>>>;
};

/** Internal - Media characters separated */
export type IMediaCharacter = {
  __typename?: 'MediaCharacter';
  /** The characters in the media voiced by the parent actor */
  character?: Maybe<ICharacter>;
  /** Media specific character name */
  characterName?: Maybe<Scalars['String']['output']>;
  dubGroup?: Maybe<Scalars['String']['output']>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  /** The characters role in the media */
  role?: Maybe<ICharacterRole>;
  roleNotes?: Maybe<Scalars['String']['output']>;
  /** The voice actor of the character */
  voiceActor?: Maybe<IStaff>;
};

export type IMediaConnection = {
  __typename?: 'MediaConnection';
  edges?: Maybe<Array<Maybe<IMediaEdge>>>;
  nodes?: Maybe<Array<Maybe<IMedia>>>;
  /** The pagination information */
  pageInfo?: Maybe<IPageInfo>;
};

export type IMediaCoverImage = {
  __typename?: 'MediaCoverImage';
  /** Average #hex color of cover image */
  color?: Maybe<Scalars['String']['output']>;
  /** The cover image url of the media at its largest size. If this size isn't available, large will be provided instead. */
  extraLarge?: Maybe<Scalars['String']['output']>;
  /** The cover image url of the media at a large size */
  large?: Maybe<Scalars['String']['output']>;
  /** The cover image url of the media at medium size */
  medium?: Maybe<Scalars['String']['output']>;
};

/** Notification for when a media entry's data was changed in a significant way impacting users' list tracking */
export type IMediaDataChangeNotification = {
  __typename?: 'MediaDataChangeNotification';
  /** The reason for the media data change */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The media that received data changes */
  media?: Maybe<IMedia>;
  /** The id of the media that received data changes */
  mediaId: Scalars['Int']['output'];
  /** The reason for the media data change */
  reason?: Maybe<Scalars['String']['output']>;
  /** The type of notification */
  type?: Maybe<INotificationType>;
};

/** Notification for when a media tracked in a user's list is deleted from the site */
export type IMediaDeletionNotification = {
  __typename?: 'MediaDeletionNotification';
  /** The reason for the media deletion */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The title of the deleted media */
  deletedMediaTitle?: Maybe<Scalars['String']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The reason for the media deletion */
  reason?: Maybe<Scalars['String']['output']>;
  /** The type of notification */
  type?: Maybe<INotificationType>;
};

/** Media connection edge */
export type IMediaEdge = {
  __typename?: 'MediaEdge';
  /** Media specific character name */
  characterName?: Maybe<Scalars['String']['output']>;
  /** The characters role in the media */
  characterRole?: Maybe<ICharacterRole>;
  /** The characters in the media voiced by the parent actor */
  characters?: Maybe<Array<Maybe<ICharacter>>>;
  /** Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant. */
  dubGroup?: Maybe<Scalars['String']['output']>;
  /** The order the media should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']['output']>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  /** If the studio is the main animation studio of the media (For Studio->MediaConnection field only) */
  isMainStudio: Scalars['Boolean']['output'];
  node?: Maybe<IMedia>;
  /** The type of relation to the parent model */
  relationType?: Maybe<IMediaRelation>;
  /** Notes regarding the VA's role for the character */
  roleNotes?: Maybe<Scalars['String']['output']>;
  /** The role of the staff member in the production of the media */
  staffRole?: Maybe<Scalars['String']['output']>;
  /** The voice actors of the character with role date */
  voiceActorRoles?: Maybe<Array<Maybe<IStaffRoleType>>>;
  /** The voice actors of the character */
  voiceActors?: Maybe<Array<Maybe<IStaff>>>;
};

/** Media connection edge */
export type IMediaEdgeRelationTypeArgs = {
  version?: InputMaybe<Scalars['Int']['input']>;
};

/** Media connection edge */
export type IMediaEdgeVoiceActorRolesArgs = {
  language?: InputMaybe<IStaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<IStaffSort>>>;
};

/** Media connection edge */
export type IMediaEdgeVoiceActorsArgs = {
  language?: InputMaybe<IStaffLanguage>;
  sort?: InputMaybe<Array<InputMaybe<IStaffSort>>>;
};

/** An external link to another site related to the media or staff member */
export type IMediaExternalLink = {
  __typename?: 'MediaExternalLink';
  color?: Maybe<Scalars['String']['output']>;
  /** The icon image url of the site. Not available for all links. Transparent PNG 64x64 */
  icon?: Maybe<Scalars['String']['output']>;
  /** The id of the external link */
  id: Scalars['Int']['output'];
  isDisabled?: Maybe<Scalars['Boolean']['output']>;
  /** Language the site content is in. See Staff language field for values. */
  language?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  /** The links website site name */
  site: Scalars['String']['output'];
  /** The links website site id */
  siteId?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<IExternalLinkType>;
  /** The url of the external link or base url of link source */
  url?: Maybe<Scalars['String']['output']>;
};

/** An external link to another site related to the media */
export type IMediaExternalLinkInput = {
  /** The id of the external link */
  id: Scalars['Int']['input'];
  /** The site location of the external link */
  site: Scalars['String']['input'];
  /** The url of the external link */
  url: Scalars['String']['input'];
};

/** The format the media was released in */
export enum IMediaFormat {
  /** Professionally published manga with more than one chapter */
  Manga = 'MANGA',
  /** Anime movies with a theatrical release */
  Movie = 'MOVIE',
  /** Short anime released as a music video */
  Music = 'MUSIC',
  /** Written books released as a series of light novels */
  Novel = 'NOVEL',
  /** (Original Net Animation) Anime that have been originally released online or are only available through streaming services. */
  Ona = 'ONA',
  /** Manga with just one chapter */
  OneShot = 'ONE_SHOT',
  /** (Original Video Animation) Anime that have been released directly on DVD/Blu-ray without originally going through a theatrical release or television broadcast */
  Ova = 'OVA',
  /** Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc */
  Special = 'SPECIAL',
  /** Anime broadcast on television */
  Tv = 'TV',
  /** Anime which are under 15 minutes in length and broadcast on television */
  TvShort = 'TV_SHORT',
}

/** List of anime or manga */
export type IMediaList = {
  __typename?: 'MediaList';
  /** Map of advanced scores with name keys */
  advancedScores?: Maybe<Scalars['Json']['output']>;
  /** When the entry was completed by the user */
  completedAt?: Maybe<IFuzzyDate>;
  /** When the entry data was created */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** Map of booleans for which custom lists the entry are in */
  customLists?: Maybe<Scalars['Json']['output']>;
  /** If the entry shown be hidden from non-custom lists */
  hiddenFromStatusLists?: Maybe<Scalars['Boolean']['output']>;
  /** The id of the list entry */
  id: Scalars['Int']['output'];
  media?: Maybe<IMedia>;
  /** The id of the media */
  mediaId: Scalars['Int']['output'];
  /** Text notes */
  notes?: Maybe<Scalars['String']['output']>;
  /** Priority of planning */
  priority?: Maybe<Scalars['Int']['output']>;
  /** If the entry should only be visible to authenticated user */
  private?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of episodes/chapters consumed by the user */
  progress?: Maybe<Scalars['Int']['output']>;
  /** The amount of volumes read by the user */
  progressVolumes?: Maybe<Scalars['Int']['output']>;
  /** The amount of times the user has rewatched/read the media */
  repeat?: Maybe<Scalars['Int']['output']>;
  /** The score of the entry */
  score?: Maybe<Scalars['Float']['output']>;
  /** When the entry was started by the user */
  startedAt?: Maybe<IFuzzyDate>;
  /** The watching/reading status */
  status?: Maybe<IMediaListStatus>;
  /** When the entry data was last updated */
  updatedAt?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<IUser>;
  /** The id of the user owner of the list entry */
  userId: Scalars['Int']['output'];
};

/** List of anime or manga */
export type IMediaListCustomListsArgs = {
  asArray?: InputMaybe<Scalars['Boolean']['input']>;
};

/** List of anime or manga */
export type IMediaListScoreArgs = {
  format?: InputMaybe<IScoreFormat>;
};

/** List of anime or manga */
export type IMediaListCollection = {
  __typename?: 'MediaListCollection';
  /**
   * A map of media list entry arrays grouped by custom lists
   * @deprecated Not GraphQL spec compliant, use lists field instead.
   */
  customLists?: Maybe<Array<Maybe<Array<Maybe<IMediaList>>>>>;
  /** If there is another chunk */
  hasNextChunk?: Maybe<Scalars['Boolean']['output']>;
  /** Grouped media list entries */
  lists?: Maybe<Array<Maybe<IMediaListGroup>>>;
  /**
   * A map of media list entry arrays grouped by status
   * @deprecated Not GraphQL spec compliant, use lists field instead.
   */
  statusLists?: Maybe<Array<Maybe<Array<Maybe<IMediaList>>>>>;
  /** The owner of the list */
  user?: Maybe<IUser>;
};

/** List of anime or manga */
export type IMediaListCollectionCustomListsArgs = {
  asArray?: InputMaybe<Scalars['Boolean']['input']>;
};

/** List of anime or manga */
export type IMediaListCollectionStatusListsArgs = {
  asArray?: InputMaybe<Scalars['Boolean']['input']>;
};

/** List group of anime or manga entries */
export type IMediaListGroup = {
  __typename?: 'MediaListGroup';
  /** Media list entries */
  entries?: Maybe<Array<Maybe<IMediaList>>>;
  isCustomList?: Maybe<Scalars['Boolean']['output']>;
  isSplitCompletedList?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<IMediaListStatus>;
};

/** A user's list options */
export type IMediaListOptions = {
  __typename?: 'MediaListOptions';
  /** The user's anime list options */
  animeList?: Maybe<IMediaListTypeOptions>;
  /** The user's manga list options */
  mangaList?: Maybe<IMediaListTypeOptions>;
  /** The default order list rows should be displayed in */
  rowOrder?: Maybe<Scalars['String']['output']>;
  /** The score format the user is using for media lists */
  scoreFormat?: Maybe<IScoreFormat>;
  /**
   * The list theme options for both lists
   * @deprecated No longer used
   */
  sharedTheme?: Maybe<Scalars['Json']['output']>;
  /**
   * If the shared theme should be used instead of the individual list themes
   * @deprecated No longer used
   */
  sharedThemeEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated No longer used */
  useLegacyLists?: Maybe<Scalars['Boolean']['output']>;
};

/** A user's list options for anime or manga lists */
export type IMediaListOptionsInput = {
  /** The names of the user's advanced scoring sections */
  advancedScoring?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** If advanced scoring is enabled */
  advancedScoringEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** The names of the user's custom lists */
  customLists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The order each list should be displayed in */
  sectionOrder?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** If the completed sections of the list should be separated by format */
  splitCompletedSectionByFormat?: InputMaybe<Scalars['Boolean']['input']>;
  /** list theme */
  theme?: InputMaybe<Scalars['String']['input']>;
};

/** Media list sort enums */
export enum IMediaListSort {
  AddedTime = 'ADDED_TIME',
  AddedTimeDesc = 'ADDED_TIME_DESC',
  FinishedOn = 'FINISHED_ON',
  FinishedOnDesc = 'FINISHED_ON_DESC',
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  MediaPopularity = 'MEDIA_POPULARITY',
  MediaPopularityDesc = 'MEDIA_POPULARITY_DESC',
  MediaTitleEnglish = 'MEDIA_TITLE_ENGLISH',
  MediaTitleEnglishDesc = 'MEDIA_TITLE_ENGLISH_DESC',
  MediaTitleNative = 'MEDIA_TITLE_NATIVE',
  MediaTitleNativeDesc = 'MEDIA_TITLE_NATIVE_DESC',
  MediaTitleRomaji = 'MEDIA_TITLE_ROMAJI',
  MediaTitleRomajiDesc = 'MEDIA_TITLE_ROMAJI_DESC',
  Priority = 'PRIORITY',
  PriorityDesc = 'PRIORITY_DESC',
  Progress = 'PROGRESS',
  ProgressDesc = 'PROGRESS_DESC',
  ProgressVolumes = 'PROGRESS_VOLUMES',
  ProgressVolumesDesc = 'PROGRESS_VOLUMES_DESC',
  Repeat = 'REPEAT',
  RepeatDesc = 'REPEAT_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  StartedOn = 'STARTED_ON',
  StartedOnDesc = 'STARTED_ON_DESC',
  Status = 'STATUS',
  StatusDesc = 'STATUS_DESC',
  UpdatedTime = 'UPDATED_TIME',
  UpdatedTimeDesc = 'UPDATED_TIME_DESC',
}

/** Media list watching/reading status enum. */
export enum IMediaListStatus {
  /** Finished watching/reading */
  Completed = 'COMPLETED',
  /** Currently watching/reading */
  Current = 'CURRENT',
  /** Stopped watching/reading before completing */
  Dropped = 'DROPPED',
  /** Paused watching/reading */
  Paused = 'PAUSED',
  /** Planning to watch/read */
  Planning = 'PLANNING',
  /** Re-watching/reading */
  Repeating = 'REPEATING',
}

/** A user's list options for anime or manga lists */
export type IMediaListTypeOptions = {
  __typename?: 'MediaListTypeOptions';
  /** The names of the user's advanced scoring sections */
  advancedScoring?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** If advanced scoring is enabled */
  advancedScoringEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** The names of the user's custom lists */
  customLists?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The order each list should be displayed in */
  sectionOrder?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** If the completed sections of the list should be separated by format */
  splitCompletedSectionByFormat?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The list theme options
   * @deprecated This field has not yet been fully implemented and may change without warning
   */
  theme?: Maybe<Scalars['Json']['output']>;
};

/** Notification for when a media entry is merged into another for a user who had it on their list */
export type IMediaMergeNotification = {
  __typename?: 'MediaMergeNotification';
  /** The reason for the media data change */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The title of the deleted media */
  deletedMediaTitles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The media that was merged into */
  media?: Maybe<IMedia>;
  /** The id of the media that was merged into */
  mediaId: Scalars['Int']['output'];
  /** The reason for the media merge */
  reason?: Maybe<Scalars['String']['output']>;
  /** The type of notification */
  type?: Maybe<INotificationType>;
};

/** The ranking of a media in a particular time span and format compared to other media */
export type IMediaRank = {
  __typename?: 'MediaRank';
  /** If the ranking is based on all time instead of a season/year */
  allTime?: Maybe<Scalars['Boolean']['output']>;
  /** String that gives context to the ranking type and time span */
  context: Scalars['String']['output'];
  /** The format the media is ranked within */
  format: IMediaFormat;
  /** The id of the rank */
  id: Scalars['Int']['output'];
  /** The numerical rank of the media */
  rank: Scalars['Int']['output'];
  /** The season the media is ranked within */
  season?: Maybe<IMediaSeason>;
  /** The type of ranking */
  type: IMediaRankType;
  /** The year the media is ranked within */
  year?: Maybe<Scalars['Int']['output']>;
};

/** The type of ranking */
export enum IMediaRankType {
  /** Ranking is based on the media's popularity */
  Popular = 'POPULAR',
  /** Ranking is based on the media's ratings/score */
  Rated = 'RATED',
}

/** Type of relation media has to its parent. */
export enum IMediaRelation {
  /** An adaption of this media into a different format */
  Adaptation = 'ADAPTATION',
  /** An alternative version of the same media */
  Alternative = 'ALTERNATIVE',
  /** Shares at least 1 character */
  Character = 'CHARACTER',
  /** Version 2 only. */
  Compilation = 'COMPILATION',
  /** Version 2 only. */
  Contains = 'CONTAINS',
  /** Other */
  Other = 'OTHER',
  /** The media a side story is from */
  Parent = 'PARENT',
  /** Released before the relation */
  Prequel = 'PREQUEL',
  /** Released after the relation */
  Sequel = 'SEQUEL',
  /** A side story of the parent media */
  SideStory = 'SIDE_STORY',
  /** Version 2 only. The source material the media was adapted from */
  Source = 'SOURCE',
  /** An alternative version of the media with a different primary focus */
  SpinOff = 'SPIN_OFF',
  /** A shortened and summarized version */
  Summary = 'SUMMARY',
}

export enum IMediaSeason {
  /** Months September to November */
  Fall = 'FALL',
  /** Months March to May */
  Spring = 'SPRING',
  /** Months June to August */
  Summer = 'SUMMER',
  /** Months December to February */
  Winter = 'WINTER',
}

/** Media sort enums */
export enum IMediaSort {
  Chapters = 'CHAPTERS',
  ChaptersDesc = 'CHAPTERS_DESC',
  Duration = 'DURATION',
  DurationDesc = 'DURATION_DESC',
  EndDate = 'END_DATE',
  EndDateDesc = 'END_DATE_DESC',
  Episodes = 'EPISODES',
  EpisodesDesc = 'EPISODES_DESC',
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC',
  Format = 'FORMAT',
  FormatDesc = 'FORMAT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Popularity = 'POPULARITY',
  PopularityDesc = 'POPULARITY_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  SearchMatch = 'SEARCH_MATCH',
  StartDate = 'START_DATE',
  StartDateDesc = 'START_DATE_DESC',
  Status = 'STATUS',
  StatusDesc = 'STATUS_DESC',
  TitleEnglish = 'TITLE_ENGLISH',
  TitleEnglishDesc = 'TITLE_ENGLISH_DESC',
  TitleNative = 'TITLE_NATIVE',
  TitleNativeDesc = 'TITLE_NATIVE_DESC',
  TitleRomaji = 'TITLE_ROMAJI',
  TitleRomajiDesc = 'TITLE_ROMAJI_DESC',
  Trending = 'TRENDING',
  TrendingDesc = 'TRENDING_DESC',
  Type = 'TYPE',
  TypeDesc = 'TYPE_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  Volumes = 'VOLUMES',
  VolumesDesc = 'VOLUMES_DESC',
}

/** Source type the media was adapted from */
export enum IMediaSource {
  /** Version 2+ only. Japanese Anime */
  Anime = 'ANIME',
  /** Version 3 only. Comics excluding manga */
  Comic = 'COMIC',
  /** Version 2+ only. Self-published works */
  Doujinshi = 'DOUJINSHI',
  /** Version 3 only. Games excluding video games */
  Game = 'GAME',
  /** Written work published in volumes */
  LightNovel = 'LIGHT_NOVEL',
  /** Version 3 only. Live action media such as movies or TV show */
  LiveAction = 'LIVE_ACTION',
  /** Asian comic book */
  Manga = 'MANGA',
  /** Version 3 only. Multimedia project */
  MultimediaProject = 'MULTIMEDIA_PROJECT',
  /** Version 2+ only. Written works not published in volumes */
  Novel = 'NOVEL',
  /** An original production not based of another work */
  Original = 'ORIGINAL',
  /** Other */
  Other = 'OTHER',
  /** Version 3 only. Picture book */
  PictureBook = 'PICTURE_BOOK',
  /** Video game */
  VideoGame = 'VIDEO_GAME',
  /** Video game driven primary by text and narrative */
  VisualNovel = 'VISUAL_NOVEL',
  /** Version 3 only. Written works published online */
  WebNovel = 'WEB_NOVEL',
}

/** A media's statistics */
export type IMediaStats = {
  __typename?: 'MediaStats';
  /** @deprecated Replaced by MediaTrends */
  airingProgression?: Maybe<Array<Maybe<IAiringProgression>>>;
  scoreDistribution?: Maybe<Array<Maybe<IScoreDistribution>>>;
  statusDistribution?: Maybe<Array<Maybe<IStatusDistribution>>>;
};

/** The current releasing status of the media */
export enum IMediaStatus {
  /** Ended before the work could be finished */
  Cancelled = 'CANCELLED',
  /** Has completed and is no longer being released */
  Finished = 'FINISHED',
  /** Version 2 only. Is currently paused from releasing and will resume at a later date */
  Hiatus = 'HIATUS',
  /** To be released at a later date */
  NotYetReleased = 'NOT_YET_RELEASED',
  /** Currently releasing */
  Releasing = 'RELEASING',
}

/** Data and links to legal streaming episodes on external sites */
export type IMediaStreamingEpisode = {
  __typename?: 'MediaStreamingEpisode';
  /** The site location of the streaming episodes */
  site?: Maybe<Scalars['String']['output']>;
  /** Url of episode image thumbnail */
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** Title of the episode */
  title?: Maybe<Scalars['String']['output']>;
  /** The url of the episode */
  url?: Maybe<Scalars['String']['output']>;
};

/** Media submission */
export type IMediaSubmission = {
  __typename?: 'MediaSubmission';
  /** Data Mod assigned to handle the submission */
  assignee?: Maybe<IUser>;
  changes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  characters?: Maybe<Array<Maybe<IMediaSubmissionComparison>>>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  externalLinks?: Maybe<Array<Maybe<IMediaSubmissionComparison>>>;
  /** The id of the submission */
  id: Scalars['Int']['output'];
  /** Whether the submission is locked */
  locked?: Maybe<Scalars['Boolean']['output']>;
  media?: Maybe<IMedia>;
  notes?: Maybe<Scalars['String']['output']>;
  relations?: Maybe<Array<Maybe<IMediaEdge>>>;
  source?: Maybe<Scalars['String']['output']>;
  staff?: Maybe<Array<Maybe<IMediaSubmissionComparison>>>;
  /** Status of the submission */
  status?: Maybe<ISubmissionStatus>;
  studios?: Maybe<Array<Maybe<IMediaSubmissionComparison>>>;
  submission?: Maybe<IMedia>;
  /** User submitter of the submission */
  submitter?: Maybe<IUser>;
  submitterStats?: Maybe<Scalars['Json']['output']>;
};

/** Media submission with comparison to current data */
export type IMediaSubmissionComparison = {
  __typename?: 'MediaSubmissionComparison';
  character?: Maybe<IMediaCharacter>;
  externalLink?: Maybe<IMediaExternalLink>;
  staff?: Maybe<IStaffEdge>;
  studio?: Maybe<IStudioEdge>;
  submission?: Maybe<IMediaSubmissionEdge>;
};

export type IMediaSubmissionEdge = {
  __typename?: 'MediaSubmissionEdge';
  character?: Maybe<ICharacter>;
  characterName?: Maybe<Scalars['String']['output']>;
  characterRole?: Maybe<ICharacterRole>;
  characterSubmission?: Maybe<ICharacter>;
  dubGroup?: Maybe<Scalars['String']['output']>;
  externalLink?: Maybe<IMediaExternalLink>;
  /** The id of the direct submission */
  id?: Maybe<Scalars['Int']['output']>;
  isMain?: Maybe<Scalars['Boolean']['output']>;
  media?: Maybe<IMedia>;
  roleNotes?: Maybe<Scalars['String']['output']>;
  staff?: Maybe<IStaff>;
  staffRole?: Maybe<Scalars['String']['output']>;
  staffSubmission?: Maybe<IStaff>;
  studio?: Maybe<IStudio>;
  voiceActor?: Maybe<IStaff>;
  voiceActorSubmission?: Maybe<IStaff>;
};

/** A tag that describes a theme or element of the media */
export type IMediaTag = {
  __typename?: 'MediaTag';
  /** The categories of tags this tag belongs to */
  category?: Maybe<Scalars['String']['output']>;
  /** A general description of the tag */
  description?: Maybe<Scalars['String']['output']>;
  /** The id of the tag */
  id: Scalars['Int']['output'];
  /** If the tag is only for adult 18+ media */
  isAdult?: Maybe<Scalars['Boolean']['output']>;
  /** If the tag could be a spoiler for any media */
  isGeneralSpoiler?: Maybe<Scalars['Boolean']['output']>;
  /** If the tag is a spoiler for this media */
  isMediaSpoiler?: Maybe<Scalars['Boolean']['output']>;
  /** The name of the tag */
  name: Scalars['String']['output'];
  /** The relevance ranking of the tag out of the 100 for this media */
  rank?: Maybe<Scalars['Int']['output']>;
  /** The user who submitted the tag */
  userId?: Maybe<Scalars['Int']['output']>;
};

/** The official titles of the media in various languages */
export type IMediaTitle = {
  __typename?: 'MediaTitle';
  /** The official english title */
  english?: Maybe<Scalars['String']['output']>;
  /** Official title in it's native language */
  native?: Maybe<Scalars['String']['output']>;
  /** The romanization of the native language title */
  romaji?: Maybe<Scalars['String']['output']>;
  /** The currently authenticated users preferred title language. Default romaji for non-authenticated */
  userPreferred?: Maybe<Scalars['String']['output']>;
};

/** The official titles of the media in various languages */
export type IMediaTitleEnglishArgs = {
  stylised?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The official titles of the media in various languages */
export type IMediaTitleNativeArgs = {
  stylised?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The official titles of the media in various languages */
export type IMediaTitleRomajiArgs = {
  stylised?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The official titles of the media in various languages */
export type IMediaTitleInput = {
  /** The official english title */
  english?: InputMaybe<Scalars['String']['input']>;
  /** Official title in it's native language */
  native?: InputMaybe<Scalars['String']['input']>;
  /** The romanization of the native language title */
  romaji?: InputMaybe<Scalars['String']['input']>;
};

/** Media trailer or advertisement */
export type IMediaTrailer = {
  __typename?: 'MediaTrailer';
  /** The trailer video id */
  id?: Maybe<Scalars['String']['output']>;
  /** The site the video is hosted by (Currently either youtube or dailymotion) */
  site?: Maybe<Scalars['String']['output']>;
  /** The url for the thumbnail image of the video */
  thumbnail?: Maybe<Scalars['String']['output']>;
};

/** Daily media statistics */
export type IMediaTrend = {
  __typename?: 'MediaTrend';
  /** A weighted average score of all the user's scores of the media */
  averageScore?: Maybe<Scalars['Int']['output']>;
  /** The day the data was recorded (timestamp) */
  date: Scalars['Int']['output'];
  /** The episode number of the anime released on this day */
  episode?: Maybe<Scalars['Int']['output']>;
  /** The number of users with watching/reading the media */
  inProgress?: Maybe<Scalars['Int']['output']>;
  /** The related media */
  media?: Maybe<IMedia>;
  /** The id of the tag */
  mediaId: Scalars['Int']['output'];
  /** The number of users with the media on their list */
  popularity?: Maybe<Scalars['Int']['output']>;
  /** If the media was being released at this time */
  releasing: Scalars['Boolean']['output'];
  /** The amount of media activity on the day */
  trending: Scalars['Int']['output'];
};

export type IMediaTrendConnection = {
  __typename?: 'MediaTrendConnection';
  edges?: Maybe<Array<Maybe<IMediaTrendEdge>>>;
  nodes?: Maybe<Array<Maybe<IMediaTrend>>>;
  /** The pagination information */
  pageInfo?: Maybe<IPageInfo>;
};

/** Media trend connection edge */
export type IMediaTrendEdge = {
  __typename?: 'MediaTrendEdge';
  node?: Maybe<IMediaTrend>;
};

/** Media trend sort enums */
export enum IMediaTrendSort {
  Date = 'DATE',
  DateDesc = 'DATE_DESC',
  Episode = 'EPISODE',
  EpisodeDesc = 'EPISODE_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MediaId = 'MEDIA_ID',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Popularity = 'POPULARITY',
  PopularityDesc = 'POPULARITY_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  Trending = 'TRENDING',
  TrendingDesc = 'TRENDING_DESC',
}

/** Media type enum, anime or manga. */
export enum IMediaType {
  /** Japanese Anime */
  Anime = 'ANIME',
  /** Asian comic */
  Manga = 'MANGA',
}

/** User message activity */
export type IMessageActivity = {
  __typename?: 'MessageActivity';
  /** The time the activity was created at */
  createdAt: Scalars['Int']['output'];
  /** The id of the activity */
  id: Scalars['Int']['output'];
  /** If the currently authenticated user liked the activity */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** If the activity is locked and can receive replies */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the message is private and only viewable to the sender and recipients */
  isPrivate?: Maybe<Scalars['Boolean']['output']>;
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the activity has */
  likeCount: Scalars['Int']['output'];
  /** The users who liked the activity */
  likes?: Maybe<Array<Maybe<IUser>>>;
  /** The message text (Markdown) */
  message?: Maybe<Scalars['String']['output']>;
  /** The user who sent the activity message */
  messenger?: Maybe<IUser>;
  /** The user id of the activity's sender */
  messengerId?: Maybe<Scalars['Int']['output']>;
  /** The user who the activity message was sent to */
  recipient?: Maybe<IUser>;
  /** The user id of the activity's recipient */
  recipientId?: Maybe<Scalars['Int']['output']>;
  /** The written replies to the activity */
  replies?: Maybe<Array<Maybe<IActivityReply>>>;
  /** The number of activity replies */
  replyCount: Scalars['Int']['output'];
  /** The url for the activity page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The type of the activity */
  type?: Maybe<IActivityType>;
};

/** User message activity */
export type IMessageActivityMessageArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IModAction = {
  __typename?: 'ModAction';
  createdAt: Scalars['Int']['output'];
  data?: Maybe<Scalars['String']['output']>;
  /** The id of the action */
  id: Scalars['Int']['output'];
  mod?: Maybe<IUser>;
  objectId?: Maybe<Scalars['Int']['output']>;
  objectType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<IModActionType>;
  user?: Maybe<IUser>;
};

export enum IModActionType {
  Anon = 'ANON',
  Ban = 'BAN',
  Delete = 'DELETE',
  Edit = 'EDIT',
  Expire = 'EXPIRE',
  Note = 'NOTE',
  Report = 'REPORT',
  Reset = 'RESET',
}

/** Mod role enums */
export enum IModRole {
  /** An AniList administrator */
  Admin = 'ADMIN',
  /** An anime data moderator */
  AnimeData = 'ANIME_DATA',
  /** A character data moderator */
  CharacterData = 'CHARACTER_DATA',
  /** A community moderator */
  Community = 'COMMUNITY',
  /** An AniList developer */
  Developer = 'DEVELOPER',
  /** A discord community moderator */
  DiscordCommunity = 'DISCORD_COMMUNITY',
  /** A lead anime data moderator */
  LeadAnimeData = 'LEAD_ANIME_DATA',
  /** A lead community moderator */
  LeadCommunity = 'LEAD_COMMUNITY',
  /** A head developer of AniList */
  LeadDeveloper = 'LEAD_DEVELOPER',
  /** A lead manga data moderator */
  LeadMangaData = 'LEAD_MANGA_DATA',
  /** A lead social media moderator */
  LeadSocialMedia = 'LEAD_SOCIAL_MEDIA',
  /** A manga data moderator */
  MangaData = 'MANGA_DATA',
  /** A retired moderator */
  Retired = 'RETIRED',
  /** A social media moderator */
  SocialMedia = 'SOCIAL_MEDIA',
  /** A staff data moderator */
  StaffData = 'STAFF_DATA',
}

export type IMutation = {
  __typename?: 'Mutation';
  /** Delete an activity item of the authenticated users */
  DeleteActivity?: Maybe<IDeleted>;
  /** Delete an activity reply of the authenticated users */
  DeleteActivityReply?: Maybe<IDeleted>;
  /** Delete a custom list and remove the list entries from it */
  DeleteCustomList?: Maybe<IDeleted>;
  /** Delete a media list entry */
  DeleteMediaListEntry?: Maybe<IDeleted>;
  /** Delete a review */
  DeleteReview?: Maybe<IDeleted>;
  /** Delete a thread */
  DeleteThread?: Maybe<IDeleted>;
  /** Delete a thread comment */
  DeleteThreadComment?: Maybe<IDeleted>;
  /** Rate a review */
  RateReview?: Maybe<IReview>;
  /** Create or update an activity reply */
  SaveActivityReply?: Maybe<IActivityReply>;
  /** Update list activity (Mod Only) */
  SaveListActivity?: Maybe<IListActivity>;
  /** Create or update a media list entry */
  SaveMediaListEntry?: Maybe<IMediaList>;
  /** Create or update message activity for the currently authenticated user */
  SaveMessageActivity?: Maybe<IMessageActivity>;
  /** Recommendation a media */
  SaveRecommendation?: Maybe<IRecommendation>;
  /** Create or update a review */
  SaveReview?: Maybe<IReview>;
  /** Create or update text activity for the currently authenticated user */
  SaveTextActivity?: Maybe<ITextActivity>;
  /** Create or update a forum thread */
  SaveThread?: Maybe<IThread>;
  /** Create or update a thread comment */
  SaveThreadComment?: Maybe<IThreadComment>;
  /** Toggle activity to be pinned to the top of the user's activity feed */
  ToggleActivityPin?: Maybe<IActivityUnion>;
  /** Toggle the subscription of an activity item */
  ToggleActivitySubscription?: Maybe<IActivityUnion>;
  /** Favourite or unfavourite an anime, manga, character, staff member, or studio */
  ToggleFavourite?: Maybe<IFavourites>;
  /** Toggle the un/following of a user */
  ToggleFollow?: Maybe<IUser>;
  /**
   * Add or remove a like from a likeable type.
   *                           Returns all the users who liked the same model
   */
  ToggleLike?: Maybe<Array<Maybe<IUser>>>;
  /** Add or remove a like from a likeable type. */
  ToggleLikeV2?: Maybe<ILikeableUnion>;
  /** Toggle the subscription of a forum thread */
  ToggleThreadSubscription?: Maybe<IThread>;
  UpdateAniChartHighlights?: Maybe<Scalars['Json']['output']>;
  UpdateAniChartSettings?: Maybe<Scalars['Json']['output']>;
  /** Update the order favourites are displayed in */
  UpdateFavouriteOrder?: Maybe<IFavourites>;
  /** Update multiple media list entries to the same values */
  UpdateMediaListEntries?: Maybe<Array<Maybe<IMediaList>>>;
  UpdateUser?: Maybe<IUser>;
};

export type IMutationDeleteActivityArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type IMutationDeleteActivityReplyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type IMutationDeleteCustomListArgs = {
  customList?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<IMediaType>;
};

export type IMutationDeleteMediaListEntryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type IMutationDeleteReviewArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type IMutationDeleteThreadArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type IMutationDeleteThreadCommentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type IMutationRateReviewArgs = {
  rating?: InputMaybe<IReviewRating>;
  reviewId?: InputMaybe<Scalars['Int']['input']>;
};

export type IMutationSaveActivityReplyArgs = {
  activityId?: InputMaybe<Scalars['Int']['input']>;
  asMod?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type IMutationSaveListActivityArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IMutationSaveMediaListEntryArgs = {
  advancedScores?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  completedAt?: InputMaybe<IFuzzyDateInput>;
  customLists?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hiddenFromStatusLists?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  progress?: InputMaybe<Scalars['Int']['input']>;
  progressVolumes?: InputMaybe<Scalars['Int']['input']>;
  repeat?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  scoreRaw?: InputMaybe<Scalars['Int']['input']>;
  startedAt?: InputMaybe<IFuzzyDateInput>;
  status?: InputMaybe<IMediaListStatus>;
};

export type IMutationSaveMessageActivityArgs = {
  asMod?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  recipientId?: InputMaybe<Scalars['Int']['input']>;
};

export type IMutationSaveRecommendationArgs = {
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<IRecommendationRating>;
};

export type IMutationSaveReviewArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
};

export type IMutationSaveTextActivityArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type IMutationSaveThreadArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  mediaCategories?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sticky?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type IMutationSaveThreadCommentArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  parentCommentId?: InputMaybe<Scalars['Int']['input']>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
};

export type IMutationToggleActivityPinArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  pinned?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IMutationToggleActivitySubscriptionArgs = {
  activityId?: InputMaybe<Scalars['Int']['input']>;
  subscribe?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IMutationToggleFavouriteArgs = {
  animeId?: InputMaybe<Scalars['Int']['input']>;
  characterId?: InputMaybe<Scalars['Int']['input']>;
  mangaId?: InputMaybe<Scalars['Int']['input']>;
  staffId?: InputMaybe<Scalars['Int']['input']>;
  studioId?: InputMaybe<Scalars['Int']['input']>;
};

export type IMutationToggleFollowArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type IMutationToggleLikeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ILikeableType>;
};

export type IMutationToggleLikeV2Args = {
  id?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ILikeableType>;
};

export type IMutationToggleThreadSubscriptionArgs = {
  subscribe?: InputMaybe<Scalars['Boolean']['input']>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
};

export type IMutationUpdateAniChartHighlightsArgs = {
  highlights?: InputMaybe<Array<InputMaybe<IAniChartHighlightInput>>>;
};

export type IMutationUpdateAniChartSettingsArgs = {
  outgoingLinkProvider?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
  titleLanguage?: InputMaybe<Scalars['String']['input']>;
};

export type IMutationUpdateFavouriteOrderArgs = {
  animeIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  animeOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  characterIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  characterOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mangaIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mangaOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  staffIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  staffOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  studioIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  studioOrder?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type IMutationUpdateMediaListEntriesArgs = {
  advancedScores?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  completedAt?: InputMaybe<IFuzzyDateInput>;
  hiddenFromStatusLists?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  progress?: InputMaybe<Scalars['Int']['input']>;
  progressVolumes?: InputMaybe<Scalars['Int']['input']>;
  repeat?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  scoreRaw?: InputMaybe<Scalars['Int']['input']>;
  startedAt?: InputMaybe<IFuzzyDateInput>;
  status?: InputMaybe<IMediaListStatus>;
};

export type IMutationUpdateUserArgs = {
  about?: InputMaybe<Scalars['String']['input']>;
  activityMergeTime?: InputMaybe<Scalars['Int']['input']>;
  airingNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  animeListOptions?: InputMaybe<IMediaListOptionsInput>;
  disabledListActivity?: InputMaybe<
    Array<InputMaybe<IListActivityOptionInput>>
  >;
  displayAdultContent?: InputMaybe<Scalars['Boolean']['input']>;
  donatorBadge?: InputMaybe<Scalars['String']['input']>;
  mangaListOptions?: InputMaybe<IMediaListOptionsInput>;
  notificationOptions?: InputMaybe<Array<InputMaybe<INotificationOptionInput>>>;
  profileColor?: InputMaybe<Scalars['String']['input']>;
  restrictMessagesToFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  rowOrder?: InputMaybe<Scalars['String']['input']>;
  scoreFormat?: InputMaybe<IScoreFormat>;
  staffNameLanguage?: InputMaybe<IUserStaffNameLanguage>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  titleLanguage?: InputMaybe<IUserTitleLanguage>;
};

/** Notification option */
export type INotificationOption = {
  __typename?: 'NotificationOption';
  /** Whether this type of notification is enabled */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The type of notification */
  type?: Maybe<INotificationType>;
};

/** Notification option input */
export type INotificationOptionInput = {
  /** Whether this type of notification is enabled */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** The type of notification */
  type?: InputMaybe<INotificationType>;
};

/** Notification type enum */
export enum INotificationType {
  /** A user has liked your activity */
  ActivityLike = 'ACTIVITY_LIKE',
  /** A user has mentioned you in their activity */
  ActivityMention = 'ACTIVITY_MENTION',
  /** A user has sent you message */
  ActivityMessage = 'ACTIVITY_MESSAGE',
  /** A user has replied to your activity */
  ActivityReply = 'ACTIVITY_REPLY',
  /** A user has liked your activity reply */
  ActivityReplyLike = 'ACTIVITY_REPLY_LIKE',
  /** A user has replied to activity you have also replied to */
  ActivityReplySubscribed = 'ACTIVITY_REPLY_SUBSCRIBED',
  /** An anime you are currently watching has aired */
  Airing = 'AIRING',
  /** A user has followed you */
  Following = 'FOLLOWING',
  /** An anime or manga has had a data change that affects how a user may track it in their lists */
  MediaDataChange = 'MEDIA_DATA_CHANGE',
  /** An anime or manga on the user's list has been deleted from the site */
  MediaDeletion = 'MEDIA_DELETION',
  /** Anime or manga entries on the user's list have been merged into a single entry */
  MediaMerge = 'MEDIA_MERGE',
  /** A new anime or manga has been added to the site where its related media is on the user's list */
  RelatedMediaAddition = 'RELATED_MEDIA_ADDITION',
  /** A user has liked your forum comment */
  ThreadCommentLike = 'THREAD_COMMENT_LIKE',
  /** A user has mentioned you in a forum comment */
  ThreadCommentMention = 'THREAD_COMMENT_MENTION',
  /** A user has replied to your forum comment */
  ThreadCommentReply = 'THREAD_COMMENT_REPLY',
  /** A user has liked your forum thread */
  ThreadLike = 'THREAD_LIKE',
  /** A user has commented in one of your subscribed forum threads */
  ThreadSubscribed = 'THREAD_SUBSCRIBED',
}

/** Notification union type */
export type INotificationUnion =
  | IActivityLikeNotification
  | IActivityMentionNotification
  | IActivityMessageNotification
  | IActivityReplyLikeNotification
  | IActivityReplyNotification
  | IActivityReplySubscribedNotification
  | IAiringNotification
  | IFollowingNotification
  | IMediaDataChangeNotification
  | IMediaDeletionNotification
  | IMediaMergeNotification
  | IRelatedMediaAdditionNotification
  | IThreadCommentLikeNotification
  | IThreadCommentMentionNotification
  | IThreadCommentReplyNotification
  | IThreadCommentSubscribedNotification
  | IThreadLikeNotification;

/** Page of data */
export type IPage = {
  __typename?: 'Page';
  activities?: Maybe<Array<Maybe<IActivityUnion>>>;
  activityReplies?: Maybe<Array<Maybe<IActivityReply>>>;
  airingSchedules?: Maybe<Array<Maybe<IAiringSchedule>>>;
  characters?: Maybe<Array<Maybe<ICharacter>>>;
  followers?: Maybe<Array<Maybe<IUser>>>;
  following?: Maybe<Array<Maybe<IUser>>>;
  likes?: Maybe<Array<Maybe<IUser>>>;
  media?: Maybe<Array<Maybe<IMedia>>>;
  mediaList?: Maybe<Array<Maybe<IMediaList>>>;
  mediaTrends?: Maybe<Array<Maybe<IMediaTrend>>>;
  notifications?: Maybe<Array<Maybe<INotificationUnion>>>;
  /** The pagination information */
  pageInfo?: Maybe<IPageInfo>;
  recommendations?: Maybe<Array<Maybe<IRecommendation>>>;
  reviews?: Maybe<Array<Maybe<IReview>>>;
  staff?: Maybe<Array<Maybe<IStaff>>>;
  studios?: Maybe<Array<Maybe<IStudio>>>;
  threadComments?: Maybe<Array<Maybe<IThreadComment>>>;
  threads?: Maybe<Array<Maybe<IThread>>>;
  users?: Maybe<Array<Maybe<IUser>>>;
};

/** Page of data */
export type IPageActivitiesArgs = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_greater?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  hasReplies?: InputMaybe<Scalars['Boolean']['input']>;
  hasRepliesOrTypeText?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId?: InputMaybe<Scalars['Int']['input']>;
  messengerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId_not?: InputMaybe<Scalars['Int']['input']>;
  messengerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<IActivitySort>>>;
  type?: InputMaybe<IActivityType>;
  type_in?: InputMaybe<Array<InputMaybe<IActivityType>>>;
  type_not?: InputMaybe<IActivityType>;
  type_not_in?: InputMaybe<Array<InputMaybe<IActivityType>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userId_not?: InputMaybe<Scalars['Int']['input']>;
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

/** Page of data */
export type IPageActivityRepliesArgs = {
  activityId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data */
export type IPageAiringSchedulesArgs = {
  airingAt?: InputMaybe<Scalars['Int']['input']>;
  airingAt_greater?: InputMaybe<Scalars['Int']['input']>;
  airingAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  episode_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IAiringSort>>>;
};

/** Page of data */
export type IPageCharactersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ICharacterSort>>>;
};

/** Page of data */
export type IPageFollowersArgs = {
  sort?: InputMaybe<Array<InputMaybe<IUserSort>>>;
  userId: Scalars['Int']['input'];
};

/** Page of data */
export type IPageFollowingArgs = {
  sort?: InputMaybe<Array<InputMaybe<IUserSort>>>;
  userId: Scalars['Int']['input'];
};

/** Page of data */
export type IPageLikesArgs = {
  likeableId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ILikeableType>;
};

/** Page of data */
export type IPageMediaArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  chapters?: InputMaybe<Scalars['Int']['input']>;
  chapters_greater?: InputMaybe<Scalars['Int']['input']>;
  chapters_lesser?: InputMaybe<Scalars['Int']['input']>;
  countryOfOrigin?: InputMaybe<Scalars['CountryCode']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  duration_greater?: InputMaybe<Scalars['Int']['input']>;
  duration_lesser?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_like?: InputMaybe<Scalars['String']['input']>;
  episodes?: InputMaybe<Scalars['Int']['input']>;
  episodes_greater?: InputMaybe<Scalars['Int']['input']>;
  episodes_lesser?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<IMediaFormat>;
  format_in?: InputMaybe<Array<InputMaybe<IMediaFormat>>>;
  format_not?: InputMaybe<IMediaFormat>;
  format_not_in?: InputMaybe<Array<InputMaybe<IMediaFormat>>>;
  genre?: InputMaybe<Scalars['String']['input']>;
  genre_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genre_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  idMal?: InputMaybe<Scalars['Int']['input']>;
  idMal_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  idMal_not?: InputMaybe<Scalars['Int']['input']>;
  idMal_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isAdult?: InputMaybe<Scalars['Boolean']['input']>;
  isLicensed?: InputMaybe<Scalars['Boolean']['input']>;
  licensedBy?: InputMaybe<Scalars['String']['input']>;
  licensedById?: InputMaybe<Scalars['Int']['input']>;
  licensedById_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  licensedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minimumTagRank?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<IMediaSeason>;
  seasonYear?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IMediaSort>>>;
  source?: InputMaybe<IMediaSource>;
  source_in?: InputMaybe<Array<InputMaybe<IMediaSource>>>;
  startDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<IMediaStatus>;
  status_in?: InputMaybe<Array<InputMaybe<IMediaStatus>>>;
  status_not?: InputMaybe<IMediaStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<IMediaStatus>>>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tagCategory?: InputMaybe<Scalars['String']['input']>;
  tagCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagCategory_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  tag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<IMediaType>;
  volumes?: InputMaybe<Scalars['Int']['input']>;
  volumes_greater?: InputMaybe<Scalars['Int']['input']>;
  volumes_lesser?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data */
export type IPageMediaListArgs = {
  compareWithAuthList?: InputMaybe<Scalars['Boolean']['input']>;
  completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_like?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  notes_like?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IMediaListSort>>>;
  startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<IMediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<IMediaListStatus>>>;
  status_not?: InputMaybe<IMediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<IMediaListStatus>>>;
  type?: InputMaybe<IMediaType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

/** Page of data */
export type IPageMediaTrendsArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_greater?: InputMaybe<Scalars['Int']['input']>;
  date_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  releasing?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IMediaTrendSort>>>;
  trending?: InputMaybe<Scalars['Int']['input']>;
  trending_greater?: InputMaybe<Scalars['Int']['input']>;
  trending_lesser?: InputMaybe<Scalars['Int']['input']>;
  trending_not?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data */
export type IPageNotificationsArgs = {
  resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<INotificationType>;
  type_in?: InputMaybe<Array<InputMaybe<INotificationType>>>;
};

/** Page of data */
export type IPageRecommendationsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  rating_greater?: InputMaybe<Scalars['Int']['input']>;
  rating_lesser?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IRecommendationSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data */
export type IPageReviewsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<IMediaType>;
  sort?: InputMaybe<Array<InputMaybe<IReviewSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data */
export type IPageStaffArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IStaffSort>>>;
};

/** Page of data */
export type IPageStudiosArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IStudioSort>>>;
};

/** Page of data */
export type IPageThreadCommentsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IThreadCommentSort>>>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data */
export type IPageThreadsArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaCategoryId?: InputMaybe<Scalars['Int']['input']>;
  replyUserId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IThreadSort>>>;
  subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** Page of data */
export type IPageUsersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IUserSort>>>;
};

export type IPageInfo = {
  __typename?: 'PageInfo';
  /** The current page */
  currentPage?: Maybe<Scalars['Int']['output']>;
  /** If there is another page */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** The last page */
  lastPage?: Maybe<Scalars['Int']['output']>;
  /** The count on a page */
  perPage?: Maybe<Scalars['Int']['output']>;
  /** The total number of items. Note: This value is not guaranteed to be accurate, do not rely on this for logic */
  total?: Maybe<Scalars['Int']['output']>;
};

/** Provides the parsed markdown as html */
export type IParsedMarkdown = {
  __typename?: 'ParsedMarkdown';
  /** The parsed markdown as html */
  html?: Maybe<Scalars['String']['output']>;
};

export type IQuery = {
  __typename?: 'Query';
  /** Activity query */
  Activity?: Maybe<IActivityUnion>;
  /** Activity reply query */
  ActivityReply?: Maybe<IActivityReply>;
  /** Airing schedule query */
  AiringSchedule?: Maybe<IAiringSchedule>;
  AniChartUser?: Maybe<IAniChartUser>;
  /** Character query */
  Character?: Maybe<ICharacter>;
  /** ExternalLinkSource collection query */
  ExternalLinkSourceCollection?: Maybe<Array<Maybe<IMediaExternalLink>>>;
  /** Follow query */
  Follower?: Maybe<IUser>;
  /** Follow query */
  Following?: Maybe<IUser>;
  /** Collection of all the possible media genres */
  GenreCollection?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Like query */
  Like?: Maybe<IUser>;
  /** Provide AniList markdown to be converted to html (Requires auth) */
  Markdown?: Maybe<IParsedMarkdown>;
  /** Media query */
  Media?: Maybe<IMedia>;
  /** Media list query */
  MediaList?: Maybe<IMediaList>;
  /** Media list collection query, provides list pre-grouped by status & custom lists. User ID and Media Type arguments required. */
  MediaListCollection?: Maybe<IMediaListCollection>;
  /** Collection of all the possible media tags */
  MediaTagCollection?: Maybe<Array<Maybe<IMediaTag>>>;
  /** Media Trend query */
  MediaTrend?: Maybe<IMediaTrend>;
  /** Notification query */
  Notification?: Maybe<INotificationUnion>;
  Page?: Maybe<IPage>;
  /** Recommendation query */
  Recommendation?: Maybe<IRecommendation>;
  /** Review query */
  Review?: Maybe<IReview>;
  /** Site statistics query */
  SiteStatistics?: Maybe<ISiteStatistics>;
  /** Staff query */
  Staff?: Maybe<IStaff>;
  /** Studio query */
  Studio?: Maybe<IStudio>;
  /** Thread query */
  Thread?: Maybe<IThread>;
  /** Comment query */
  ThreadComment?: Maybe<Array<Maybe<IThreadComment>>>;
  /** User query */
  User?: Maybe<IUser>;
  /** Get the currently authenticated user */
  Viewer?: Maybe<IUser>;
};

export type IQueryActivityArgs = {
  createdAt?: InputMaybe<Scalars['Int']['input']>;
  createdAt_greater?: InputMaybe<Scalars['Int']['input']>;
  createdAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  hasReplies?: InputMaybe<Scalars['Boolean']['input']>;
  hasRepliesOrTypeText?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId?: InputMaybe<Scalars['Int']['input']>;
  messengerId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  messengerId_not?: InputMaybe<Scalars['Int']['input']>;
  messengerId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sort?: InputMaybe<Array<InputMaybe<IActivitySort>>>;
  type?: InputMaybe<IActivityType>;
  type_in?: InputMaybe<Array<InputMaybe<IActivityType>>>;
  type_not?: InputMaybe<IActivityType>;
  type_not_in?: InputMaybe<Array<InputMaybe<IActivityType>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userId_not?: InputMaybe<Scalars['Int']['input']>;
  userId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type IQueryActivityReplyArgs = {
  activityId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type IQueryAiringScheduleArgs = {
  airingAt?: InputMaybe<Scalars['Int']['input']>;
  airingAt_greater?: InputMaybe<Scalars['Int']['input']>;
  airingAt_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  episode_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notYetAired?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IAiringSort>>>;
};

export type IQueryCharacterArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ICharacterSort>>>;
};

export type IQueryExternalLinkSourceCollectionArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<IExternalLinkMediaType>;
  type?: InputMaybe<IExternalLinkType>;
};

export type IQueryFollowerArgs = {
  sort?: InputMaybe<Array<InputMaybe<IUserSort>>>;
  userId: Scalars['Int']['input'];
};

export type IQueryFollowingArgs = {
  sort?: InputMaybe<Array<InputMaybe<IUserSort>>>;
  userId: Scalars['Int']['input'];
};

export type IQueryLikeArgs = {
  likeableId?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ILikeableType>;
};

export type IQueryMarkdownArgs = {
  markdown: Scalars['String']['input'];
};

export type IQueryMediaArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  chapters?: InputMaybe<Scalars['Int']['input']>;
  chapters_greater?: InputMaybe<Scalars['Int']['input']>;
  chapters_lesser?: InputMaybe<Scalars['Int']['input']>;
  countryOfOrigin?: InputMaybe<Scalars['CountryCode']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  duration_greater?: InputMaybe<Scalars['Int']['input']>;
  duration_lesser?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  endDate_like?: InputMaybe<Scalars['String']['input']>;
  episodes?: InputMaybe<Scalars['Int']['input']>;
  episodes_greater?: InputMaybe<Scalars['Int']['input']>;
  episodes_lesser?: InputMaybe<Scalars['Int']['input']>;
  format?: InputMaybe<IMediaFormat>;
  format_in?: InputMaybe<Array<InputMaybe<IMediaFormat>>>;
  format_not?: InputMaybe<IMediaFormat>;
  format_not_in?: InputMaybe<Array<InputMaybe<IMediaFormat>>>;
  genre?: InputMaybe<Scalars['String']['input']>;
  genre_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  genre_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  idMal?: InputMaybe<Scalars['Int']['input']>;
  idMal_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  idMal_not?: InputMaybe<Scalars['Int']['input']>;
  idMal_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isAdult?: InputMaybe<Scalars['Boolean']['input']>;
  isLicensed?: InputMaybe<Scalars['Boolean']['input']>;
  licensedBy?: InputMaybe<Scalars['String']['input']>;
  licensedById?: InputMaybe<Scalars['Int']['input']>;
  licensedById_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  licensedBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minimumTagRank?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<IMediaSeason>;
  seasonYear?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IMediaSort>>>;
  source?: InputMaybe<IMediaSource>;
  source_in?: InputMaybe<Array<InputMaybe<IMediaSource>>>;
  startDate?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startDate_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<IMediaStatus>;
  status_in?: InputMaybe<Array<InputMaybe<IMediaStatus>>>;
  status_not?: InputMaybe<IMediaStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<IMediaStatus>>>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tagCategory?: InputMaybe<Scalars['String']['input']>;
  tagCategory_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagCategory_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  tag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<IMediaType>;
  volumes?: InputMaybe<Scalars['Int']['input']>;
  volumes_greater?: InputMaybe<Scalars['Int']['input']>;
  volumes_lesser?: InputMaybe<Scalars['Int']['input']>;
};

export type IQueryMediaListArgs = {
  compareWithAuthList?: InputMaybe<Scalars['Boolean']['input']>;
  completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_like?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isFollowing?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  notes_like?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IMediaListSort>>>;
  startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<IMediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<IMediaListStatus>>>;
  status_not?: InputMaybe<IMediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<IMediaListStatus>>>;
  type?: InputMaybe<IMediaType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type IQueryMediaListCollectionArgs = {
  chunk?: InputMaybe<Scalars['Int']['input']>;
  completedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  completedAt_like?: InputMaybe<Scalars['String']['input']>;
  forceSingleCompletedList?: InputMaybe<Scalars['Boolean']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  notes_like?: InputMaybe<Scalars['String']['input']>;
  perChunk?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IMediaListSort>>>;
  startedAt?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_greater?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_lesser?: InputMaybe<Scalars['FuzzyDateInt']['input']>;
  startedAt_like?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<IMediaListStatus>;
  status_in?: InputMaybe<Array<InputMaybe<IMediaListStatus>>>;
  status_not?: InputMaybe<IMediaListStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<IMediaListStatus>>>;
  type?: InputMaybe<IMediaType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type IQueryMediaTagCollectionArgs = {
  status?: InputMaybe<Scalars['Int']['input']>;
};

export type IQueryMediaTrendArgs = {
  averageScore?: InputMaybe<Scalars['Int']['input']>;
  averageScore_greater?: InputMaybe<Scalars['Int']['input']>;
  averageScore_lesser?: InputMaybe<Scalars['Int']['input']>;
  averageScore_not?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_greater?: InputMaybe<Scalars['Int']['input']>;
  date_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode?: InputMaybe<Scalars['Int']['input']>;
  episode_greater?: InputMaybe<Scalars['Int']['input']>;
  episode_lesser?: InputMaybe<Scalars['Int']['input']>;
  episode_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaId_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaId_not?: InputMaybe<Scalars['Int']['input']>;
  mediaId_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  popularity?: InputMaybe<Scalars['Int']['input']>;
  popularity_greater?: InputMaybe<Scalars['Int']['input']>;
  popularity_lesser?: InputMaybe<Scalars['Int']['input']>;
  popularity_not?: InputMaybe<Scalars['Int']['input']>;
  releasing?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IMediaTrendSort>>>;
  trending?: InputMaybe<Scalars['Int']['input']>;
  trending_greater?: InputMaybe<Scalars['Int']['input']>;
  trending_lesser?: InputMaybe<Scalars['Int']['input']>;
  trending_not?: InputMaybe<Scalars['Int']['input']>;
};

export type IQueryNotificationArgs = {
  resetNotificationCount?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<INotificationType>;
  type_in?: InputMaybe<Array<InputMaybe<INotificationType>>>;
};

export type IQueryPageArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};

export type IQueryRecommendationArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaRecommendationId?: InputMaybe<Scalars['Int']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  rating_greater?: InputMaybe<Scalars['Int']['input']>;
  rating_lesser?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IRecommendationSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type IQueryReviewArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  mediaType?: InputMaybe<IMediaType>;
  sort?: InputMaybe<Array<InputMaybe<IReviewSort>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type IQueryStaffArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isBirthday?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IStaffSort>>>;
};

export type IQueryStudioArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id_not?: InputMaybe<Scalars['Int']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IStudioSort>>>;
};

export type IQueryThreadArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  mediaCategoryId?: InputMaybe<Scalars['Int']['input']>;
  replyUserId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IThreadSort>>>;
  subscribed?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type IQueryThreadCommentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IThreadCommentSort>>>;
  threadId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type IQueryUserArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isModerator?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IUserSort>>>;
};

/** Media recommendation */
export type IRecommendation = {
  __typename?: 'Recommendation';
  /** The id of the recommendation */
  id: Scalars['Int']['output'];
  /** The media the recommendation is from */
  media?: Maybe<IMedia>;
  /** The recommended media */
  mediaRecommendation?: Maybe<IMedia>;
  /** Users rating of the recommendation */
  rating?: Maybe<Scalars['Int']['output']>;
  /** The user that first created the recommendation */
  user?: Maybe<IUser>;
  /** The rating of the recommendation by currently authenticated user */
  userRating?: Maybe<IRecommendationRating>;
};

export type IRecommendationConnection = {
  __typename?: 'RecommendationConnection';
  edges?: Maybe<Array<Maybe<IRecommendationEdge>>>;
  nodes?: Maybe<Array<Maybe<IRecommendation>>>;
  /** The pagination information */
  pageInfo?: Maybe<IPageInfo>;
};

/** Recommendation connection edge */
export type IRecommendationEdge = {
  __typename?: 'RecommendationEdge';
  node?: Maybe<IRecommendation>;
};

/** Recommendation rating enums */
export enum IRecommendationRating {
  NoRating = 'NO_RATING',
  RateDown = 'RATE_DOWN',
  RateUp = 'RATE_UP',
}

/** Recommendation sort enums */
export enum IRecommendationSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Rating = 'RATING',
  RatingDesc = 'RATING_DESC',
}

/** Notification for when new media is added to the site */
export type IRelatedMediaAdditionNotification = {
  __typename?: 'RelatedMediaAdditionNotification';
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The associated media of the airing schedule */
  media?: Maybe<IMedia>;
  /** The id of the new media */
  mediaId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<INotificationType>;
};

export type IReport = {
  __typename?: 'Report';
  cleared?: Maybe<Scalars['Boolean']['output']>;
  /** When the entry data was created */
  createdAt?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  reported?: Maybe<IUser>;
  reporter?: Maybe<IUser>;
};

/** A Review that features in an anime or manga */
export type IReview = {
  __typename?: 'Review';
  /** The main review body text */
  body?: Maybe<Scalars['String']['output']>;
  /** The time of the thread creation */
  createdAt: Scalars['Int']['output'];
  /** The id of the review */
  id: Scalars['Int']['output'];
  /** The media the review is of */
  media?: Maybe<IMedia>;
  /** The id of the review's media */
  mediaId: Scalars['Int']['output'];
  /** For which type of media the review is for */
  mediaType?: Maybe<IMediaType>;
  /** If the review is not yet publicly published and is only viewable by creator */
  private?: Maybe<Scalars['Boolean']['output']>;
  /** The total user rating of the review */
  rating?: Maybe<Scalars['Int']['output']>;
  /** The amount of user ratings of the review */
  ratingAmount?: Maybe<Scalars['Int']['output']>;
  /** The review score of the media */
  score?: Maybe<Scalars['Int']['output']>;
  /** The url for the review page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** A short summary of the review */
  summary?: Maybe<Scalars['String']['output']>;
  /** The time of the thread last update */
  updatedAt: Scalars['Int']['output'];
  /** The creator of the review */
  user?: Maybe<IUser>;
  /** The id of the review's creator */
  userId: Scalars['Int']['output'];
  /** The rating of the review by currently authenticated user */
  userRating?: Maybe<IReviewRating>;
};

/** A Review that features in an anime or manga */
export type IReviewBodyArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IReviewConnection = {
  __typename?: 'ReviewConnection';
  edges?: Maybe<Array<Maybe<IReviewEdge>>>;
  nodes?: Maybe<Array<Maybe<IReview>>>;
  /** The pagination information */
  pageInfo?: Maybe<IPageInfo>;
};

/** Review connection edge */
export type IReviewEdge = {
  __typename?: 'ReviewEdge';
  node?: Maybe<IReview>;
};

/** Review rating enums */
export enum IReviewRating {
  DownVote = 'DOWN_VOTE',
  NoVote = 'NO_VOTE',
  UpVote = 'UP_VOTE',
}

/** Review sort enums */
export enum IReviewSort {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Rating = 'RATING',
  RatingDesc = 'RATING_DESC',
  Score = 'SCORE',
  ScoreDesc = 'SCORE_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
}

/** Feed of mod edit activity */
export type IRevisionHistory = {
  __typename?: 'RevisionHistory';
  /** The action taken on the objects */
  action?: Maybe<IRevisionHistoryAction>;
  /** A JSON object of the fields that changed */
  changes?: Maybe<Scalars['Json']['output']>;
  /** The character the mod feed entry references */
  character?: Maybe<ICharacter>;
  /** When the mod feed entry was created */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The external link source the mod feed entry references */
  externalLink?: Maybe<IMediaExternalLink>;
  /** The id of the media */
  id: Scalars['Int']['output'];
  /** The media the mod feed entry references */
  media?: Maybe<IMedia>;
  /** The staff member the mod feed entry references */
  staff?: Maybe<IStaff>;
  /** The studio the mod feed entry references */
  studio?: Maybe<IStudio>;
  /** The user who made the edit to the object */
  user?: Maybe<IUser>;
};

/** Revision history actions */
export enum IRevisionHistoryAction {
  Create = 'CREATE',
  Edit = 'EDIT',
}

/** A user's list score distribution. */
export type IScoreDistribution = {
  __typename?: 'ScoreDistribution';
  /** The amount of list entries with this score */
  amount?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
};

/** Media list scoring type */
export enum IScoreFormat {
  /** An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :) */
  Point_3 = 'POINT_3',
  /** An integer from 0-5. Should be represented in Stars */
  Point_5 = 'POINT_5',
  /** An integer from 0-10 */
  Point_10 = 'POINT_10',
  /** A float from 0-10 with 1 decimal place */
  Point_10Decimal = 'POINT_10_DECIMAL',
  /** An integer from 0-100 */
  Point_100 = 'POINT_100',
}

export type ISiteStatistics = {
  __typename?: 'SiteStatistics';
  anime?: Maybe<ISiteTrendConnection>;
  characters?: Maybe<ISiteTrendConnection>;
  manga?: Maybe<ISiteTrendConnection>;
  reviews?: Maybe<ISiteTrendConnection>;
  staff?: Maybe<ISiteTrendConnection>;
  studios?: Maybe<ISiteTrendConnection>;
  users?: Maybe<ISiteTrendConnection>;
};

export type ISiteStatisticsAnimeArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ISiteTrendSort>>>;
};

export type ISiteStatisticsCharactersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ISiteTrendSort>>>;
};

export type ISiteStatisticsMangaArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ISiteTrendSort>>>;
};

export type ISiteStatisticsReviewsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ISiteTrendSort>>>;
};

export type ISiteStatisticsStaffArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ISiteTrendSort>>>;
};

export type ISiteStatisticsStudiosArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ISiteTrendSort>>>;
};

export type ISiteStatisticsUsersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ISiteTrendSort>>>;
};

/** Daily site statistics */
export type ISiteTrend = {
  __typename?: 'SiteTrend';
  /** The change from yesterday */
  change: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  /** The day the data was recorded (timestamp) */
  date: Scalars['Int']['output'];
};

export type ISiteTrendConnection = {
  __typename?: 'SiteTrendConnection';
  edges?: Maybe<Array<Maybe<ISiteTrendEdge>>>;
  nodes?: Maybe<Array<Maybe<ISiteTrend>>>;
  /** The pagination information */
  pageInfo?: Maybe<IPageInfo>;
};

/** Site trend connection edge */
export type ISiteTrendEdge = {
  __typename?: 'SiteTrendEdge';
  node?: Maybe<ISiteTrend>;
};

/** Site trend sort enums */
export enum ISiteTrendSort {
  Change = 'CHANGE',
  ChangeDesc = 'CHANGE_DESC',
  Count = 'COUNT',
  CountDesc = 'COUNT_DESC',
  Date = 'DATE',
  DateDesc = 'DATE_DESC',
}

/** Voice actors or production staff */
export type IStaff = {
  __typename?: 'Staff';
  /** The person's age in years */
  age?: Maybe<Scalars['Int']['output']>;
  /** The persons blood type */
  bloodType?: Maybe<Scalars['String']['output']>;
  /** Media the actor voiced characters in. (Same data as characters with media as node instead of characters) */
  characterMedia?: Maybe<IMediaConnection>;
  /** Characters voiced by the actor */
  characters?: Maybe<ICharacterConnection>;
  dateOfBirth?: Maybe<IFuzzyDate>;
  dateOfDeath?: Maybe<IFuzzyDate>;
  /** A general description of the staff member */
  description?: Maybe<Scalars['String']['output']>;
  /** The amount of user's who have favourited the staff member */
  favourites?: Maybe<Scalars['Int']['output']>;
  /** The staff's gender. Usually Male, Female, or Non-binary but can be any string. */
  gender?: Maybe<Scalars['String']['output']>;
  /** The persons birthplace or hometown */
  homeTown?: Maybe<Scalars['String']['output']>;
  /** The id of the staff member */
  id: Scalars['Int']['output'];
  /** The staff images */
  image?: Maybe<IStaffImage>;
  /** If the staff member is marked as favourite by the currently authenticated user */
  isFavourite: Scalars['Boolean']['output'];
  /** If the staff member is blocked from being added to favourites */
  isFavouriteBlocked: Scalars['Boolean']['output'];
  /**
   * The primary language the staff member dub's in
   * @deprecated Replaced with languageV2
   */
  language?: Maybe<IStaffLanguage>;
  /** The primary language of the staff member. Current values: Japanese, English, Korean, Italian, Spanish, Portuguese, French, German, Hebrew, Hungarian, Chinese, Arabic, Filipino, Catalan, Finnish, Turkish, Dutch, Swedish, Thai, Tagalog, Malaysian, Indonesian, Vietnamese, Nepali, Hindi, Urdu */
  languageV2?: Maybe<Scalars['String']['output']>;
  /** Notes for site moderators */
  modNotes?: Maybe<Scalars['String']['output']>;
  /** The names of the staff member */
  name?: Maybe<IStaffName>;
  /** The person's primary occupations */
  primaryOccupations?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The url for the staff page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** Staff member that the submission is referencing */
  staff?: Maybe<IStaff>;
  /** Media where the staff member has a production role */
  staffMedia?: Maybe<IMediaConnection>;
  /** Inner details of submission status */
  submissionNotes?: Maybe<Scalars['String']['output']>;
  /** Status of the submission */
  submissionStatus?: Maybe<Scalars['Int']['output']>;
  /** Submitter for the submission */
  submitter?: Maybe<IUser>;
  /** @deprecated No data available */
  updatedAt?: Maybe<Scalars['Int']['output']>;
  /** [startYear, endYear] (If the 2nd value is not present staff is still active) */
  yearsActive?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

/** Voice actors or production staff */
export type IStaffCharacterMediaArgs = {
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IMediaSort>>>;
};

/** Voice actors or production staff */
export type IStaffCharactersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ICharacterSort>>>;
};

/** Voice actors or production staff */
export type IStaffDescriptionArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Voice actors or production staff */
export type IStaffStaffMediaArgs = {
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IMediaSort>>>;
  type?: InputMaybe<IMediaType>;
};

export type IStaffConnection = {
  __typename?: 'StaffConnection';
  edges?: Maybe<Array<Maybe<IStaffEdge>>>;
  nodes?: Maybe<Array<Maybe<IStaff>>>;
  /** The pagination information */
  pageInfo?: Maybe<IPageInfo>;
};

/** Staff connection edge */
export type IStaffEdge = {
  __typename?: 'StaffEdge';
  /** The order the staff should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']['output']>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  node?: Maybe<IStaff>;
  /** The role of the staff member in the production of the media */
  role?: Maybe<Scalars['String']['output']>;
};

export type IStaffImage = {
  __typename?: 'StaffImage';
  /** The person's image of media at its largest size */
  large?: Maybe<Scalars['String']['output']>;
  /** The person's image of media at medium size */
  medium?: Maybe<Scalars['String']['output']>;
};

/** The primary language of the voice actor */
export enum IStaffLanguage {
  /** English */
  English = 'ENGLISH',
  /** French */
  French = 'FRENCH',
  /** German */
  German = 'GERMAN',
  /** Hebrew */
  Hebrew = 'HEBREW',
  /** Hungarian */
  Hungarian = 'HUNGARIAN',
  /** Italian */
  Italian = 'ITALIAN',
  /** Japanese */
  Japanese = 'JAPANESE',
  /** Korean */
  Korean = 'KOREAN',
  /** Portuguese */
  Portuguese = 'PORTUGUESE',
  /** Spanish */
  Spanish = 'SPANISH',
}

/** The names of the staff member */
export type IStaffName = {
  __typename?: 'StaffName';
  /** Other names the staff member might be referred to as (pen names) */
  alternative?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The person's given name */
  first?: Maybe<Scalars['String']['output']>;
  /** The person's first and last name */
  full?: Maybe<Scalars['String']['output']>;
  /** The person's surname */
  last?: Maybe<Scalars['String']['output']>;
  /** The person's middle name */
  middle?: Maybe<Scalars['String']['output']>;
  /** The person's full name in their native language */
  native?: Maybe<Scalars['String']['output']>;
  /** The currently authenticated users preferred name language. Default romaji for non-authenticated */
  userPreferred?: Maybe<Scalars['String']['output']>;
};

/** The names of the staff member */
export type IStaffNameInput = {
  /** Other names the character might be referred by */
  alternative?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The person's given name */
  first?: InputMaybe<Scalars['String']['input']>;
  /** The person's surname */
  last?: InputMaybe<Scalars['String']['input']>;
  /** The person's middle name */
  middle?: InputMaybe<Scalars['String']['input']>;
  /** The person's full name in their native language */
  native?: InputMaybe<Scalars['String']['input']>;
};

/** Voice actor role for a character */
export type IStaffRoleType = {
  __typename?: 'StaffRoleType';
  /** Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant. */
  dubGroup?: Maybe<Scalars['String']['output']>;
  /** Notes regarding the VA's role for the character */
  roleNotes?: Maybe<Scalars['String']['output']>;
  /** The voice actors of the character */
  voiceActor?: Maybe<IStaff>;
};

/** Staff sort enums */
export enum IStaffSort {
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Language = 'LANGUAGE',
  LanguageDesc = 'LANGUAGE_DESC',
  /** Order manually decided by moderators */
  Relevance = 'RELEVANCE',
  Role = 'ROLE',
  RoleDesc = 'ROLE_DESC',
  SearchMatch = 'SEARCH_MATCH',
}

/** User's staff statistics */
export type IStaffStats = {
  __typename?: 'StaffStats';
  amount?: Maybe<Scalars['Int']['output']>;
  meanScore?: Maybe<Scalars['Int']['output']>;
  staff?: Maybe<IStaff>;
  /** The amount of time in minutes the staff member has been watched by the user */
  timeWatched?: Maybe<Scalars['Int']['output']>;
};

/** A submission for a staff that features in an anime or manga */
export type IStaffSubmission = {
  __typename?: 'StaffSubmission';
  /** Data Mod assigned to handle the submission */
  assignee?: Maybe<IUser>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the submission */
  id: Scalars['Int']['output'];
  /** Whether the submission is locked */
  locked?: Maybe<Scalars['Boolean']['output']>;
  /** Inner details of submission status */
  notes?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  /** Staff that the submission is referencing */
  staff?: Maybe<IStaff>;
  /** Status of the submission */
  status?: Maybe<ISubmissionStatus>;
  /** The staff submission changes */
  submission?: Maybe<IStaff>;
  /** Submitter for the submission */
  submitter?: Maybe<IUser>;
};

/** The distribution of the watching/reading status of media or a user's list */
export type IStatusDistribution = {
  __typename?: 'StatusDistribution';
  /** The amount of entries with this status */
  amount?: Maybe<Scalars['Int']['output']>;
  /** The day the activity took place (Unix timestamp) */
  status?: Maybe<IMediaListStatus>;
};

/** Animation or production company */
export type IStudio = {
  __typename?: 'Studio';
  /** The amount of user's who have favourited the studio */
  favourites?: Maybe<Scalars['Int']['output']>;
  /** The id of the studio */
  id: Scalars['Int']['output'];
  /** If the studio is an animation studio or a different kind of company */
  isAnimationStudio: Scalars['Boolean']['output'];
  /** If the studio is marked as favourite by the currently authenticated user */
  isFavourite: Scalars['Boolean']['output'];
  /** The media the studio has worked on */
  media?: Maybe<IMediaConnection>;
  /** The name of the studio */
  name: Scalars['String']['output'];
  /** The url for the studio page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
};

/** Animation or production company */
export type IStudioMediaArgs = {
  isMain?: InputMaybe<Scalars['Boolean']['input']>;
  onList?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IMediaSort>>>;
};

export type IStudioConnection = {
  __typename?: 'StudioConnection';
  edges?: Maybe<Array<Maybe<IStudioEdge>>>;
  nodes?: Maybe<Array<Maybe<IStudio>>>;
  /** The pagination information */
  pageInfo?: Maybe<IPageInfo>;
};

/** Studio connection edge */
export type IStudioEdge = {
  __typename?: 'StudioEdge';
  /** The order the character should be displayed from the users favourites */
  favouriteOrder?: Maybe<Scalars['Int']['output']>;
  /** The id of the connection */
  id?: Maybe<Scalars['Int']['output']>;
  /** If the studio is the main animation studio of the anime */
  isMain: Scalars['Boolean']['output'];
  node?: Maybe<IStudio>;
};

/** Studio sort enums */
export enum IStudioSort {
  Favourites = 'FAVOURITES',
  FavouritesDesc = 'FAVOURITES_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  Name = 'NAME',
  NameDesc = 'NAME_DESC',
  SearchMatch = 'SEARCH_MATCH',
}

/** User's studio statistics */
export type IStudioStats = {
  __typename?: 'StudioStats';
  amount?: Maybe<Scalars['Int']['output']>;
  meanScore?: Maybe<Scalars['Int']['output']>;
  studio?: Maybe<IStudio>;
  /** The amount of time in minutes the studio's works have been watched by the user */
  timeWatched?: Maybe<Scalars['Int']['output']>;
};

/** Submission sort enums */
export enum ISubmissionSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
}

/** Submission status */
export enum ISubmissionStatus {
  Accepted = 'ACCEPTED',
  PartiallyAccepted = 'PARTIALLY_ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
}

/** User's tag statistics */
export type ITagStats = {
  __typename?: 'TagStats';
  amount?: Maybe<Scalars['Int']['output']>;
  meanScore?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<IMediaTag>;
  /** The amount of time in minutes the tag has been watched by the user */
  timeWatched?: Maybe<Scalars['Int']['output']>;
};

/** User text activity */
export type ITextActivity = {
  __typename?: 'TextActivity';
  /** The time the activity was created at */
  createdAt: Scalars['Int']['output'];
  /** The id of the activity */
  id: Scalars['Int']['output'];
  /** If the currently authenticated user liked the activity */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** If the activity is locked and can receive replies */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the activity is pinned to the top of the users activity feed */
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  /** If the currently authenticated user is subscribed to the activity */
  isSubscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the activity has */
  likeCount: Scalars['Int']['output'];
  /** The users who liked the activity */
  likes?: Maybe<Array<Maybe<IUser>>>;
  /** The written replies to the activity */
  replies?: Maybe<Array<Maybe<IActivityReply>>>;
  /** The number of activity replies */
  replyCount: Scalars['Int']['output'];
  /** The url for the activity page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The status text (Markdown) */
  text?: Maybe<Scalars['String']['output']>;
  /** The type of activity */
  type?: Maybe<IActivityType>;
  /** The user who created the activity */
  user?: Maybe<IUser>;
  /** The user id of the activity's creator */
  userId?: Maybe<Scalars['Int']['output']>;
};

/** User text activity */
export type ITextActivityTextArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Forum Thread */
export type IThread = {
  __typename?: 'Thread';
  /** The text body of the thread (Markdown) */
  body?: Maybe<Scalars['String']['output']>;
  /** The categories of the thread */
  categories?: Maybe<Array<Maybe<IThreadCategory>>>;
  /** The time of the thread creation */
  createdAt: Scalars['Int']['output'];
  /** The id of the thread */
  id: Scalars['Int']['output'];
  /** If the currently authenticated user liked the thread */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** If the thread is locked and can receive comments */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** If the thread is stickied and should be displayed at the top of the page */
  isSticky?: Maybe<Scalars['Boolean']['output']>;
  /** If the currently authenticated user is subscribed to the thread */
  isSubscribed?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the thread has */
  likeCount: Scalars['Int']['output'];
  /** The users who liked the thread */
  likes?: Maybe<Array<Maybe<IUser>>>;
  /** The media categories of the thread */
  mediaCategories?: Maybe<Array<Maybe<IMedia>>>;
  /** The time of the last reply */
  repliedAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the most recent comment on the thread */
  replyCommentId?: Maybe<Scalars['Int']['output']>;
  /** The number of comments on the thread */
  replyCount?: Maybe<Scalars['Int']['output']>;
  /** The user to last reply to the thread */
  replyUser?: Maybe<IUser>;
  /** The id of the user who most recently commented on the thread */
  replyUserId?: Maybe<Scalars['Int']['output']>;
  /** The url for the thread page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The title of the thread */
  title?: Maybe<Scalars['String']['output']>;
  /** The time of the thread last update */
  updatedAt: Scalars['Int']['output'];
  /** The owner of the thread */
  user?: Maybe<IUser>;
  /** The id of the thread owner user */
  userId: Scalars['Int']['output'];
  /** The number of times users have viewed the thread */
  viewCount?: Maybe<Scalars['Int']['output']>;
};

/** Forum Thread */
export type IThreadBodyArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A forum thread category */
export type IThreadCategory = {
  __typename?: 'ThreadCategory';
  /** The id of the category */
  id: Scalars['Int']['output'];
  /** The name of the category */
  name: Scalars['String']['output'];
};

/** Forum Thread Comment */
export type IThreadComment = {
  __typename?: 'ThreadComment';
  /** The comment's child reply comments */
  childComments?: Maybe<Scalars['Json']['output']>;
  /** The text content of the comment (Markdown) */
  comment?: Maybe<Scalars['String']['output']>;
  /** The time of the comments creation */
  createdAt: Scalars['Int']['output'];
  /** The id of the comment */
  id: Scalars['Int']['output'];
  /** If the currently authenticated user liked the comment */
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  /** If the comment tree is locked and may not receive replies or edits */
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  /** The amount of likes the comment has */
  likeCount: Scalars['Int']['output'];
  /** The users who liked the comment */
  likes?: Maybe<Array<Maybe<IUser>>>;
  /** The url for the comment page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The thread the comment belongs to */
  thread?: Maybe<IThread>;
  /** The id of thread the comment belongs to */
  threadId?: Maybe<Scalars['Int']['output']>;
  /** The time of the comments last update */
  updatedAt: Scalars['Int']['output'];
  /** The user who created the comment */
  user?: Maybe<IUser>;
  /** The user id of the comment's owner */
  userId?: Maybe<Scalars['Int']['output']>;
};

/** Forum Thread Comment */
export type IThreadCommentCommentArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Notification for when a thread comment is liked */
export type IThreadCommentLikeNotification = {
  __typename?: 'ThreadCommentLikeNotification';
  /** The thread comment that was liked */
  comment?: Maybe<IThreadComment>;
  /** The id of the activity which was liked */
  commentId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<IThread>;
  /** The type of notification */
  type?: Maybe<INotificationType>;
  /** The user who liked the activity */
  user?: Maybe<IUser>;
  /** The id of the user who liked to the activity */
  userId: Scalars['Int']['output'];
};

/** Notification for when authenticated user is @ mentioned in a forum thread comment */
export type IThreadCommentMentionNotification = {
  __typename?: 'ThreadCommentMentionNotification';
  /** The thread comment that included the @ mention */
  comment?: Maybe<IThreadComment>;
  /** The id of the comment where mentioned */
  commentId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<IThread>;
  /** The type of notification */
  type?: Maybe<INotificationType>;
  /** The user who mentioned the authenticated user */
  user?: Maybe<IUser>;
  /** The id of the user who mentioned the authenticated user */
  userId: Scalars['Int']['output'];
};

/** Notification for when a user replies to your forum thread comment */
export type IThreadCommentReplyNotification = {
  __typename?: 'ThreadCommentReplyNotification';
  /** The reply thread comment */
  comment?: Maybe<IThreadComment>;
  /** The id of the reply comment */
  commentId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<IThread>;
  /** The type of notification */
  type?: Maybe<INotificationType>;
  /** The user who replied to the activity */
  user?: Maybe<IUser>;
  /** The id of the user who create the comment reply */
  userId: Scalars['Int']['output'];
};

/** Thread comments sort enums */
export enum IThreadCommentSort {
  Id = 'ID',
  IdDesc = 'ID_DESC',
}

/** Notification for when a user replies to a subscribed forum thread */
export type IThreadCommentSubscribedNotification = {
  __typename?: 'ThreadCommentSubscribedNotification';
  /** The reply thread comment */
  comment?: Maybe<IThreadComment>;
  /** The id of the new comment in the subscribed thread */
  commentId: Scalars['Int']['output'];
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<IThread>;
  /** The type of notification */
  type?: Maybe<INotificationType>;
  /** The user who replied to the subscribed thread */
  user?: Maybe<IUser>;
  /** The id of the user who commented on the thread */
  userId: Scalars['Int']['output'];
};

/** Notification for when a thread is liked */
export type IThreadLikeNotification = {
  __typename?: 'ThreadLikeNotification';
  /** The liked thread comment */
  comment?: Maybe<IThreadComment>;
  /** The notification context text */
  context?: Maybe<Scalars['String']['output']>;
  /** The time the notification was created at */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** The id of the Notification */
  id: Scalars['Int']['output'];
  /** The thread that the relevant comment belongs to */
  thread?: Maybe<IThread>;
  /** The id of the thread which was liked */
  threadId: Scalars['Int']['output'];
  /** The type of notification */
  type?: Maybe<INotificationType>;
  /** The user who liked the activity */
  user?: Maybe<IUser>;
  /** The id of the user who liked to the activity */
  userId: Scalars['Int']['output'];
};

/** Thread sort enums */
export enum IThreadSort {
  CreatedAt = 'CREATED_AT',
  CreatedAtDesc = 'CREATED_AT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  IsSticky = 'IS_STICKY',
  RepliedAt = 'REPLIED_AT',
  RepliedAtDesc = 'REPLIED_AT_DESC',
  ReplyCount = 'REPLY_COUNT',
  ReplyCountDesc = 'REPLY_COUNT_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Title = 'TITLE',
  TitleDesc = 'TITLE_DESC',
  UpdatedAt = 'UPDATED_AT',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  ViewCount = 'VIEW_COUNT',
  ViewCountDesc = 'VIEW_COUNT_DESC',
}

/** A user */
export type IUser = {
  __typename?: 'User';
  /** The bio written by user (Markdown) */
  about?: Maybe<Scalars['String']['output']>;
  /** The user's avatar images */
  avatar?: Maybe<IUserAvatar>;
  /** The user's banner images */
  bannerImage?: Maybe<Scalars['String']['output']>;
  bans?: Maybe<Scalars['Json']['output']>;
  /** When the user's account was created. (Does not exist for accounts created before 2020) */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** Custom donation badge text */
  donatorBadge?: Maybe<Scalars['String']['output']>;
  /** The donation tier of the user */
  donatorTier?: Maybe<Scalars['Int']['output']>;
  /** The users favourites */
  favourites?: Maybe<IFavourites>;
  /** The id of the user */
  id: Scalars['Int']['output'];
  /** If the user is blocked by the authenticated user */
  isBlocked?: Maybe<Scalars['Boolean']['output']>;
  /** If this user if following the authenticated user */
  isFollower?: Maybe<Scalars['Boolean']['output']>;
  /** If the authenticated user if following this user */
  isFollowing?: Maybe<Scalars['Boolean']['output']>;
  /** The user's media list options */
  mediaListOptions?: Maybe<IMediaListOptions>;
  /** The user's moderator roles if they are a site moderator */
  moderatorRoles?: Maybe<Array<Maybe<IModRole>>>;
  /**
   * If the user is a moderator or data moderator
   * @deprecated Deprecated. Replaced with moderatorRoles field.
   */
  moderatorStatus?: Maybe<Scalars['String']['output']>;
  /** The name of the user */
  name: Scalars['String']['output'];
  /** The user's general options */
  options?: Maybe<IUserOptions>;
  /** The user's previously used names. */
  previousNames?: Maybe<Array<Maybe<IUserPreviousName>>>;
  /** The url for the user page on the AniList website */
  siteUrl?: Maybe<Scalars['String']['output']>;
  /** The users anime & manga list statistics */
  statistics?: Maybe<IUserStatisticTypes>;
  /**
   * The user's statistics
   * @deprecated Deprecated. Replaced with statistics field.
   */
  stats?: Maybe<IUserStats>;
  /** The number of unread notifications the user has */
  unreadNotificationCount?: Maybe<Scalars['Int']['output']>;
  /** When the user's data was last updated */
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

/** A user */
export type IUserAboutArgs = {
  asHtml?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A user */
export type IUserFavouritesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** A user's activity history stats. */
export type IUserActivityHistory = {
  __typename?: 'UserActivityHistory';
  /** The amount of activity on the day */
  amount?: Maybe<Scalars['Int']['output']>;
  /** The day the activity took place (Unix timestamp) */
  date?: Maybe<Scalars['Int']['output']>;
  /** The level of activity represented on a 1-10 scale */
  level?: Maybe<Scalars['Int']['output']>;
};

/** A user's avatars */
export type IUserAvatar = {
  __typename?: 'UserAvatar';
  /** The avatar of user at its largest size */
  large?: Maybe<Scalars['String']['output']>;
  /** The avatar of user at medium size */
  medium?: Maybe<Scalars['String']['output']>;
};

export type IUserCountryStatistic = {
  __typename?: 'UserCountryStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  country?: Maybe<Scalars['CountryCode']['output']>;
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
};

export type IUserFormatStatistic = {
  __typename?: 'UserFormatStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  format?: Maybe<IMediaFormat>;
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
};

export type IUserGenreStatistic = {
  __typename?: 'UserGenreStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  genre?: Maybe<Scalars['String']['output']>;
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
};

export type IUserLengthStatistic = {
  __typename?: 'UserLengthStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  length?: Maybe<Scalars['String']['output']>;
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
};

/** User data for moderators */
export type IUserModData = {
  __typename?: 'UserModData';
  alts?: Maybe<Array<Maybe<IUser>>>;
  bans?: Maybe<Scalars['Json']['output']>;
  counts?: Maybe<Scalars['Json']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  ip?: Maybe<Scalars['Json']['output']>;
  privacy?: Maybe<Scalars['Int']['output']>;
};

/** A user's general options */
export type IUserOptions = {
  __typename?: 'UserOptions';
  /** Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always. */
  activityMergeTime?: Maybe<Scalars['Int']['output']>;
  /** Whether the user receives notifications when a show they are watching aires */
  airingNotifications?: Maybe<Scalars['Boolean']['output']>;
  /** The list activity types the user has disabled from being created from list updates */
  disabledListActivity?: Maybe<Array<Maybe<IListActivityOption>>>;
  /** Whether the user has enabled viewing of 18+ content */
  displayAdultContent?: Maybe<Scalars['Boolean']['output']>;
  /** Notification options */
  notificationOptions?: Maybe<Array<Maybe<INotificationOption>>>;
  /** Profile highlight color (blue, purple, pink, orange, red, green, gray) */
  profileColor?: Maybe<Scalars['String']['output']>;
  /** Whether the user only allow messages from users they follow */
  restrictMessagesToFollowing?: Maybe<Scalars['Boolean']['output']>;
  /** The language the user wants to see staff and character names in */
  staffNameLanguage?: Maybe<IUserStaffNameLanguage>;
  /** The user's timezone offset (Auth user only) */
  timezone?: Maybe<Scalars['String']['output']>;
  /** The language the user wants to see media titles in */
  titleLanguage?: Maybe<IUserTitleLanguage>;
};

/** A user's previous name */
export type IUserPreviousName = {
  __typename?: 'UserPreviousName';
  /** When the user first changed from this name. */
  createdAt?: Maybe<Scalars['Int']['output']>;
  /** A previous name of the user. */
  name?: Maybe<Scalars['String']['output']>;
  /** When the user most recently changed from this name. */
  updatedAt?: Maybe<Scalars['Int']['output']>;
};

export type IUserReleaseYearStatistic = {
  __typename?: 'UserReleaseYearStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  releaseYear?: Maybe<Scalars['Int']['output']>;
};

export type IUserScoreStatistic = {
  __typename?: 'UserScoreStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  score?: Maybe<Scalars['Int']['output']>;
};

/** User sort enums */
export enum IUserSort {
  ChaptersRead = 'CHAPTERS_READ',
  ChaptersReadDesc = 'CHAPTERS_READ_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  SearchMatch = 'SEARCH_MATCH',
  Username = 'USERNAME',
  UsernameDesc = 'USERNAME_DESC',
  WatchedTime = 'WATCHED_TIME',
  WatchedTimeDesc = 'WATCHED_TIME_DESC',
}

/** The language the user wants to see staff and character names in */
export enum IUserStaffNameLanguage {
  /** The staff or character's name in their native language */
  Native = 'NATIVE',
  /** The romanization of the staff or character's native name */
  Romaji = 'ROMAJI',
  /** The romanization of the staff or character's native name, with western name ordering */
  RomajiWestern = 'ROMAJI_WESTERN',
}

export type IUserStaffStatistic = {
  __typename?: 'UserStaffStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  staff?: Maybe<IStaff>;
};

export type IUserStartYearStatistic = {
  __typename?: 'UserStartYearStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  startYear?: Maybe<Scalars['Int']['output']>;
};

export type IUserStatisticTypes = {
  __typename?: 'UserStatisticTypes';
  anime?: Maybe<IUserStatistics>;
  manga?: Maybe<IUserStatistics>;
};

export type IUserStatistics = {
  __typename?: 'UserStatistics';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  countries?: Maybe<Array<Maybe<IUserCountryStatistic>>>;
  episodesWatched: Scalars['Int']['output'];
  formats?: Maybe<Array<Maybe<IUserFormatStatistic>>>;
  genres?: Maybe<Array<Maybe<IUserGenreStatistic>>>;
  lengths?: Maybe<Array<Maybe<IUserLengthStatistic>>>;
  meanScore: Scalars['Float']['output'];
  minutesWatched: Scalars['Int']['output'];
  releaseYears?: Maybe<Array<Maybe<IUserReleaseYearStatistic>>>;
  scores?: Maybe<Array<Maybe<IUserScoreStatistic>>>;
  staff?: Maybe<Array<Maybe<IUserStaffStatistic>>>;
  standardDeviation: Scalars['Float']['output'];
  startYears?: Maybe<Array<Maybe<IUserStartYearStatistic>>>;
  statuses?: Maybe<Array<Maybe<IUserStatusStatistic>>>;
  studios?: Maybe<Array<Maybe<IUserStudioStatistic>>>;
  tags?: Maybe<Array<Maybe<IUserTagStatistic>>>;
  voiceActors?: Maybe<Array<Maybe<IUserVoiceActorStatistic>>>;
  volumesRead: Scalars['Int']['output'];
};

export type IUserStatisticsCountriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IUserStatisticsSort>>>;
};

export type IUserStatisticsFormatsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IUserStatisticsSort>>>;
};

export type IUserStatisticsGenresArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IUserStatisticsSort>>>;
};

export type IUserStatisticsLengthsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IUserStatisticsSort>>>;
};

export type IUserStatisticsReleaseYearsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IUserStatisticsSort>>>;
};

export type IUserStatisticsScoresArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IUserStatisticsSort>>>;
};

export type IUserStatisticsStaffArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IUserStatisticsSort>>>;
};

export type IUserStatisticsStartYearsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IUserStatisticsSort>>>;
};

export type IUserStatisticsStatusesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IUserStatisticsSort>>>;
};

export type IUserStatisticsStudiosArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IUserStatisticsSort>>>;
};

export type IUserStatisticsTagsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IUserStatisticsSort>>>;
};

export type IUserStatisticsVoiceActorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IUserStatisticsSort>>>;
};

/** User statistics sort enum */
export enum IUserStatisticsSort {
  Count = 'COUNT',
  CountDesc = 'COUNT_DESC',
  Id = 'ID',
  IdDesc = 'ID_DESC',
  MeanScore = 'MEAN_SCORE',
  MeanScoreDesc = 'MEAN_SCORE_DESC',
  Progress = 'PROGRESS',
  ProgressDesc = 'PROGRESS_DESC',
}

/** A user's statistics */
export type IUserStats = {
  __typename?: 'UserStats';
  activityHistory?: Maybe<Array<Maybe<IUserActivityHistory>>>;
  animeListScores?: Maybe<IListScoreStats>;
  animeScoreDistribution?: Maybe<Array<Maybe<IScoreDistribution>>>;
  animeStatusDistribution?: Maybe<Array<Maybe<IStatusDistribution>>>;
  /** The amount of manga chapters the user has read */
  chaptersRead?: Maybe<Scalars['Int']['output']>;
  favouredActors?: Maybe<Array<Maybe<IStaffStats>>>;
  favouredFormats?: Maybe<Array<Maybe<IFormatStats>>>;
  favouredGenres?: Maybe<Array<Maybe<IGenreStats>>>;
  favouredGenresOverview?: Maybe<Array<Maybe<IGenreStats>>>;
  favouredStaff?: Maybe<Array<Maybe<IStaffStats>>>;
  favouredStudios?: Maybe<Array<Maybe<IStudioStats>>>;
  favouredTags?: Maybe<Array<Maybe<ITagStats>>>;
  favouredYears?: Maybe<Array<Maybe<IYearStats>>>;
  mangaListScores?: Maybe<IListScoreStats>;
  mangaScoreDistribution?: Maybe<Array<Maybe<IScoreDistribution>>>;
  mangaStatusDistribution?: Maybe<Array<Maybe<IStatusDistribution>>>;
  /** The amount of anime the user has watched in minutes */
  watchedTime?: Maybe<Scalars['Int']['output']>;
};

export type IUserStatusStatistic = {
  __typename?: 'UserStatusStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  status?: Maybe<IMediaListStatus>;
};

export type IUserStudioStatistic = {
  __typename?: 'UserStudioStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  studio?: Maybe<IStudio>;
};

export type IUserTagStatistic = {
  __typename?: 'UserTagStatistic';
  chaptersRead: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  tag?: Maybe<IMediaTag>;
};

/** The language the user wants to see media titles in */
export enum IUserTitleLanguage {
  /** The official english title */
  English = 'ENGLISH',
  /** The official english title, stylised by media creator */
  EnglishStylised = 'ENGLISH_STYLISED',
  /** Official title in it's native language */
  Native = 'NATIVE',
  /** Official title in it's native language, stylised by media creator */
  NativeStylised = 'NATIVE_STYLISED',
  /** The romanization of the native language title */
  Romaji = 'ROMAJI',
  /** The romanization of the native language title, stylised by media creator */
  RomajiStylised = 'ROMAJI_STYLISED',
}

export type IUserVoiceActorStatistic = {
  __typename?: 'UserVoiceActorStatistic';
  chaptersRead: Scalars['Int']['output'];
  characterIds: Array<Maybe<Scalars['Int']['output']>>;
  count: Scalars['Int']['output'];
  meanScore: Scalars['Float']['output'];
  mediaIds: Array<Maybe<Scalars['Int']['output']>>;
  minutesWatched: Scalars['Int']['output'];
  voiceActor?: Maybe<IStaff>;
};

/** User's year statistics */
export type IYearStats = {
  __typename?: 'YearStats';
  amount?: Maybe<Scalars['Int']['output']>;
  meanScore?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type IUserAnimeListQueryVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>;
}>;

export type IUserAnimeListQuery = {
  __typename?: 'Query';
  MediaListCollection?: {
    __typename?: 'MediaListCollection';
    lists?: Array<{
      __typename?: 'MediaListGroup';
      entries?: Array<{
        __typename?: 'MediaList';
        media?: {
          __typename?: 'Media';
          id: number;
          idMal?: number | null;
          status?: IMediaStatus | null;
          title?: {
            __typename?: 'MediaTitle';
            romaji?: string | null;
            userPreferred?: string | null;
            native?: string | null;
            english?: string | null;
          } | null;
          coverImage?: {
            __typename?: 'MediaCoverImage';
            extraLarge?: string | null;
          } | null;
        } | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type IAnimePartsFragment = {
  __typename?: 'Media';
  id: number;
  idMal?: number | null;
  status?: IMediaStatus | null;
  title?: {
    __typename?: 'MediaTitle';
    romaji?: string | null;
    userPreferred?: string | null;
    native?: string | null;
    english?: string | null;
  } | null;
  coverImage?: {
    __typename?: 'MediaCoverImage';
    extraLarge?: string | null;
  } | null;
};

export type IAnimeQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;

export type IAnimeQuery = {
  __typename?: 'Query';
  Media?: {
    __typename?: 'Media';
    id: number;
    idMal?: number | null;
    status?: IMediaStatus | null;
    characters?: {
      __typename?: 'CharacterConnection';
      nodes?: Array<{
        __typename?: 'Character';
        gender?: string | null;
        id: number;
        favourites?: number | null;
        isFavourite: boolean;
        image?: { __typename?: 'CharacterImage'; large?: string | null } | null;
        name?: {
          __typename?: 'CharacterName';
          userPreferred?: string | null;
        } | null;
      } | null> | null;
    } | null;
    title?: {
      __typename?: 'MediaTitle';
      romaji?: string | null;
      userPreferred?: string | null;
      native?: string | null;
      english?: string | null;
    } | null;
    coverImage?: {
      __typename?: 'MediaCoverImage';
      extraLarge?: string | null;
    } | null;
  } | null;
};

export type IAnilistUserProfileQueryQueryVariables = Exact<{
  [key: string]: never;
}>;

export type IAnilistUserProfileQueryQuery = {
  __typename?: 'Query';
  Viewer?: {
    __typename?: 'User';
    id: number;
    name: string;
    avatar?: { __typename?: 'UserAvatar'; large?: string | null } | null;
  } | null;
};
