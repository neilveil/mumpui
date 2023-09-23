import s from './styles.module.scss'

interface props {
  blogs: string[]
}

export default function Main({ blogs }: props) {
  return <div className={s.main}></div>
}

Main.blogs = {
  theStoryOfMumpUI: 'theStoryOfMumpUI',
  bestUILibrary: 'bestUILibrary',
  howToImportSelectedComponents: 'howToImportSelectedComponents',
  whyMumpUIDoesNotProvideMoreButtons: 'whyMumpUIDoesNotProvideMoreButtons',
  bestMultiSelectUX: 'bestMultiSelectUX',
  whyToUseRem: 'whyToUseRem',
  whyMumpUIUsesNativeComponents: 'whyMumpUIUsesNativeComponents',
  howToManageLightAndDarkThemes: 'howToManageLightAndDarkThemes'
}
