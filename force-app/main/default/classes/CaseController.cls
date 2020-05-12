public with sharing class CaseController {
    public CaseController() {

    }

    @AuraEnabled(cacheable = true)
    public static List<Case> getAllCases() {
      return [Select Id, Subject, Description, Status, Origin From Case];
    }
}
