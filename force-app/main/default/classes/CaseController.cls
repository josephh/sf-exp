public with sharing class CaseController {
    public CaseController() {

    }

    @AuraEnabled(cacheable = true)
    public static List<Case> getAllCases(String subject) {
      String key = '%' + subject + '%';
      return [Select Id, Subject, Description, Status, Origin From Case WHERE subject like: key];
    }
}
