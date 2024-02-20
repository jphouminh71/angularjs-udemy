namespace angularjs.tester.api
{
    public class CharacterRule
    {
        public string rulename { get; set; }
    }

    public class AllRules
    {
        public IEnumerable<CharacterRule> rules { get; set; }
    }
}